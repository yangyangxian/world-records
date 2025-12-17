import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className='flex flex-col center text-2xl font-bold bg-cyan-500 text-white h-screen'>
      <div>Hello, world.</div>
      <div>Welcome to World Records!</div>
    </div>
  )
}
