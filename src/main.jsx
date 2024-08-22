import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './layout/route'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <div className='w-full bg-slate-300'>
  <HelmetProvider>
      <RouterProvider router={router} />
      
  </HelmetProvider>,
  </div>
)
