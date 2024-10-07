import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/pages/index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './layout/route'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <div className='w-full'>
  <HelmetProvider>
      <RouterProvider router={router} />
      
  </HelmetProvider>
  </div>
)
