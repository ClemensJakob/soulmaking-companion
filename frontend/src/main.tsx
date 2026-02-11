import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'
import { ElementsPage } from './pages/ElementsPage'
import { LoginPage } from './pages/LoginPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/elements" element={<ElementsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
