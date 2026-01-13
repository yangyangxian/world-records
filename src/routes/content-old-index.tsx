import { createFileRoute } from '@tanstack/react-router'
import chongqingImg from '../assets/chongqing_wulong.jpeg'
import metadata from '../assets/chongqing_wulong.metadata.json'

export const Route = createFileRoute('/content-old-index')({ component: App })

function App() {
  return (
    <div className='flex flex-col overflow-auto text-2xl font-bold bg-color text-white min-h-svh'>
        {/* <div className='flex w-full items-start'> */}
          <div className='flex items-start'>
            <img
              src={chongqingImg}
              alt='Description'
              className='object-contain shadow-xl'
            />
            
            <div className='text-sm bg-black/40 p-4 h-full'>
              <h3 className='font-semibold mb-2'>Photo Details</h3>
              <div><strong>Camera:</strong> {metadata.make} {metadata.model}</div>
              <div><strong>Date:</strong> {metadata.datetime}</div>
              <div><strong>Exposure:</strong> {metadata.exposure_time}</div>
              <div><strong>Aperture:</strong> {metadata.aperture}</div>
              <div><strong>ISO:</strong> {metadata.iso}</div>
              <div><strong>Focal (35mm):</strong> {metadata.focal_length_35mm}</div>
              {metadata.gps && (
                <div className='mt-2'>
                  <strong>GPS:</strong>
                  <div>Lat: {metadata.gps.lat}</div>
                  <div>Lon: {metadata.gps.lon}</div>
                  <div>Alt: {metadata.gps.alt}</div>
                </div>
              )}
            </div>
          </div>
        {/* </div> */}
    </div>
  )
}
