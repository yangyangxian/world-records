import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { getPunkSongs } from '@/data/demo.punk-songs'

export const Route = createFileRoute('/api/punk-songs')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = await getPunkSongs()
          return json(data)
        } catch (err: any) {
          return json({ message: err?.message ?? 'Unknown error' }, { status: 500 })
        }
      },
    },
  },
})
