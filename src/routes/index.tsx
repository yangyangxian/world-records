import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className='grid grid-rows-[200px_200px] text-2xl font-bold bg-cyan-500 text-white h-screen'>
      <div className='flex center'>Hello, world.</div>
      <div className='flex center'>Welcome to World Records!</div>
    </div>
  )
}
