import Navbar from "@/pages/navbar";
import { Outlet } from "react-router-dom";


const Main = () => {
 return (
  <div>
   <div>
    <Navbar/>
   </div>
   
   <Outlet/>
  </div>
 );
};

export default Main;