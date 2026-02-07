import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import { ElementsPage } from './pages/ElementsPage'
import { RandomElementPage } from './pages/RandomElementPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/elements" element={<ElementsPage />} />
        <Route path="/elements/random" element={<RandomElementPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
