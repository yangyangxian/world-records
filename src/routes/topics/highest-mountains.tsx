import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/topics/highest-mountains')({
  component: RouteComponent,
})

const mountains = [
  { name: 'Mount Everest', height: '8,848 m', location: 'Nepal / China' },
  { name: 'K2', height: '8,611 m', location: 'Pakistan / China' },
  { name: 'Kangchenjunga', height: '8,586 m', location: 'Nepal / India' },
  { name: 'Lhotse', height: '8,516 m', location: 'Nepal / China' },
  { name: 'Makalu', height: '8,485 m', location: 'Nepal / China' },
]

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black p-6 text-white">
      <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg shadow-lg border border-white/10">
        <h1 className="text-3xl font-bold mb-4 text-yellow-300">Highest Mountains</h1>
        <p className="mb-6 text-white/80">A short list of the world's highest mountains by elevation.</p>
        <ul className="space-y-4">
          {mountains.map((m) => (
            <li key={m.name} className="p-4 rounded-md bg-white/5 border border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold">{m.name}</div>
                  <div className="text-sm text-white/60">{m.location}</div>
                </div>
                <div className="text-sm text-white/90">{m.height}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
