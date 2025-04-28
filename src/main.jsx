import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router'
import Distribuciones from './Distribuciones.jsx'
import Entornos from './Entornos.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App/>}/>
                <Route path = "/Distribuciones" element = {<Distribuciones/>}/>
                <Route path = "/Entornos" element = {<Entornos/>}/>
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
