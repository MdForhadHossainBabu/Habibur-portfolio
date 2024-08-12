import { createBrowserRouter } from "react-router-dom";
import Main from "../main";
import Home from "@/pages/home";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>,
  children: [
   {
    index: true,
    element:<Home/>
   }
  ]
 }
])