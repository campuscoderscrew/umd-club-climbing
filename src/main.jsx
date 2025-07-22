import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Background from './components/background.jsx'
import Text from './components/text.jsx'
import Video from './components/Video.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Text/>
    <Video/>
    <Background/>
  </StrictMode>,
)
