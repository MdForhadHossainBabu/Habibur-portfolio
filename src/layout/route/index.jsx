import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../main";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>,
  children: [
   {
    index: true,
    element:<Home/>,
   },
   {
    path: '/about',
    element:<About/>
   },
   {
    path: '/service',
    element:<Services/>
   },
   {
    path: '/portfolio',
    element:<Portfolio/>
   },
   {
    path: '/contact',
    element:<Contact/>
   },
   {
    path: '*',
    element: <Navigate to='/'/>
   }
  ]
 }
])