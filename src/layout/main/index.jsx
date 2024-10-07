import Footer from '@/pages/footer';
import Navbar from '@/pages/navbar';
import { FaWhatsapp } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="relative transition-all duration-1000">
      <div className="h-14">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-91px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <div className="fixed rounded-full right-8 bottom-4">
        <div className='absolute flex items-center justify-center w-8 h-8 bg-green-600 -z-20 animation left-[1.3px] rounded-full top-[2px]'>
          
        </div>
        <span>
          <a href="https://wa.me/8801793741251">
            <FaWhatsapp className="p-1 text-4xl text-white bg-green-500 rounded-full" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Main;
