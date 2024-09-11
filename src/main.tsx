import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from '@/components/home.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'
import '@/styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Toaster />
  </StrictMode>
)
