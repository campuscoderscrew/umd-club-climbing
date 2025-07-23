import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import WallWaiver from './components/WallWaiver'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-24"> {/* Add padding to prevent overlap with fixed Navbar */}
        <WallWaiver />
      </main>
    </>
  )
}

export default App
