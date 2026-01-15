import { createFileRoute } from '@tanstack/react-router'
import { longestSharks } from '../../data/longest-sharks'

export const Route = createFileRoute('/topics/longest-sharks')({
  component: RouteComponent,
})

function RouteComponent() {
  const sharks = longestSharks

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black p-6 text-white">
      <div className="max-w-3xl mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-2 text-cyan-300 text-left">Longest Sharks</h1>
        <p className="mb-0 text-white/80 text-left">A short list of some of the longest shark species fetched from Sharkwater.</p>
      </div>
      <ul className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
        {sharks.map((s: any) => (
          <li key={s.name} className="p-4 rounded-md bg-white/5 border border-white/10 overflow-hidden">
            <div className="flex gap-4 items-center">
              <div className="w-40 h-28 md:w-56 md:h-40 bg-black/10 flex items-center justify-center overflow-hidden">
                {s.image ? (
                  s.wiki ? (
                    <a href={s.wiki} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                    </a>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                  )
                ) : (
                  <div className="text-sm text-white/60">No image</div>
                )}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold">{s.name}</div>
                {s.name_zh ? (
                  <div className="text-sm text-white/70">{s.name_zh}</div>
                ) : null}
                <div className="text-sm text-white/60 italic">{s.scientific}</div>
                <div className="text-sm text-white/90 mt-2">{s.length}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
