import { createFileRoute, Link } from '@tanstack/react-router'
import sampleImg from '../assets/chongqing_wulong.jpeg'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Topics</h1>
        <p className="text-white/70 mb-8">Explore topics and click a card to view details.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="block bg-white/5 rounded-lg overflow-hidden hover:scale-105 transform transition-all"
            >
              <div className="h-48 bg-black/10 flex items-center justify-center">
                <img src={t.img} alt={t.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 text-center">
                <div className="text-lg font-semibold">{t.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

const topics = [
  {
    title: 'Highest Mountains',
    to: '/topics/highest-mountains',
    img: sampleImg,
  },
  {
    title: 'Longest Sharks',
    to: '/topics/longest-sharks',
    img: sampleImg,
  },
]

export const Route = createFileRoute('/')({ component: App })

