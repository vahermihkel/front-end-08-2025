import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// 1. npm i react-router-dom ---> vajalikud koodijupid lähevad node_modules
// 2. pean react-router-dom seest võtma koodi BrowserRouter osas ja selle importima
// 3. pean oma rakenduse <App /> ümbritsema BrowserRouteriga
// 4. pean tegema URL ja failide vahelisi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 1h varus

// 4x Indrekuga
// 12.08 - Reacti algus - navigeerimine
// 14.08 - useState
// 19.08 - xxxx   20min
// 21.08 - 18.30-20.10 dünaamiline CSS, alamkomponendid
