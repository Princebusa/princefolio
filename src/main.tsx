import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Sticky from './components/sticky.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sticky>
      <App />
    </Sticky>
  </StrictMode>,
)
