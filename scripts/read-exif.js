#!/usr/bin/env node
// ESM version of EXIF reader
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const file = path.resolve(__dirname, '../src/assets/chongqing_wulong.jpeg')

async function main() {
  try {
    const { exiftool } = await import('exiftool-vendored')
    const tags = await exiftool.read(file)
    // pick useful fields
    const out = {
      make: tags.Make?.description || tags.Make || null,
      model: tags.Model?.description || tags.Model || null,
      software: tags.Software?.description || null,
      datetime: tags.DateTime?.description || tags.CreateDate || null,
      exposure_time: tags.ExposureTime?.description || tags.ShutterSpeedValue || null,
      aperture: tags.FNumber?.description || tags.ApertureValue || null,
      iso: tags.ISOSpeedRatings?.description || tags.ISOSpeedRatings || null,
      focal_length: tags.FocalLength?.description || tags.FocalLength || null,
      focal_length_35mm: tags.FocalLengthIn35mmFilm?.description || null,
      width: tags['Image Width']?.description || tags.PixelXDimension || null,
      height: tags['Image Height']?.description || tags.PixelYDimension || null,
      gps: tags.GPSLatitude && tags.GPSLongitude ? {
        lat: tags.GPSLatitude.description || tags.GPSLatitude,
        lon: tags.GPSLongitude.description || tags.GPSLongitude,
        alt: tags.GPSAltitude?.description || null,
      } : null,
    }

    const outPath = path.resolve(__dirname, '../src/assets/chongqing_wulong.metadata.json')
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8')
    console.log('Wrote metadata to', outPath)
    await exiftool.end()
  } catch (e) {
    try {
      const ExifReader = (await import('exifreader')).default
      const data = fs.readFileSync(file)
      const tags = ExifReader.load(data.buffer)
      const out = {
        make: tags.Make?.description || null,
        model: tags.Model?.description || null,
        software: tags.Software?.description || null,
        datetime: tags.DateTime?.description || null,
        exposure_time: tags.ExposureTime?.description || null,
        aperture: tags.FNumber?.description || null,
        iso: tags.ISOSpeedRatings?.description || null,
        focal_length: tags.FocalLength?.description || null,
        focal_length_35mm: tags.FocalLengthIn35mmFilm?.description || null,
        width: tags['Image Width']?.description || null,
        height: tags['Image Height']?.description || null,
        gps: tags.GPSLatitude && tags.GPSLongitude ? {
          lat: tags.GPSLatitude.description,
          lon: tags.GPSLongitude.description,
          alt: tags.GPSAltitude?.description || null,
        } : null,
      }
      const outPath = path.resolve(__dirname, '../src/assets/chongqing_wulong.metadata.json')
      fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8')
      console.log('Wrote metadata to', outPath)
    } catch (err) {
      console.error('No EXIF parser available. Install exiftool-vendored or exifreader.')
      console.error(err.message)
      process.exit(1)
    }
  }
}

main()
