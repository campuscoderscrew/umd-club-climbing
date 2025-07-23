import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/background.jsx'
import Text from './components/text.jsx'
import Video from './components/Video.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Text/>
        <Video/>
        <Background/>
    </>
  )
}

export default App
