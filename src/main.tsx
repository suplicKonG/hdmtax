import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/index.css'
import App from './Components/App.tsx'


const rootElement = document.getElementById('root') as HTMLElement


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)