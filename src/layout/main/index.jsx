import Footer from '@/pages/footer';
import Navbar from '@/pages/navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="transition-all duration-1000 relative">
      <div className="h-14">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-91px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <div className="right-8 bottom-4  fixed rounded-full">
        <span>
          <a href="https://wa.me/8801793741251">
            <FaWhatsapp className="text-4xl wShadow rounded-full text-green-500" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Main;
