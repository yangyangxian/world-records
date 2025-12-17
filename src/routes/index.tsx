import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className='flex center text-2xl font-bold'>
      <div>Hello, world.</div>
      <div>Welcome to World Records!</div>
    </div>
  )
}
