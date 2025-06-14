import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PantallaBasica } from './pantalla_base/basico.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PantallaBasica />
  </StrictMode>,
)
