import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './layout/route'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <div className='container w-full'>
  <HelmetProvider>
    <RouterProvider router={router}/>
  </HelmetProvider>,
  </div>
)
