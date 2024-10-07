import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 py-12 mx-auto md:grid-cols-2 dark:bg-slate-800 bg-slate-300">
      <div className="flex items-center gap-4 mx-auto dark:bg-slate-800">
        <a
          target="_blank"
          className="p-1 duration-300 border-2 rounded-full hover:bg-white"
          href="https://www.facebook.com/dmhabiburbd1"
        >
          <FaFacebook className="text-2xl transition-all duration-100 hover:text-blue-700" />
        </a>
        <a
          href="https://www.instagram.com/dmhabiburbd1"
          target="_blank"
          className="p-1 duration-300 border-2 rounded-full hover:bg-white"
        >
          <FaInstagram className="text-2xl transition-all duration-100 hover:text-rose-700" />
        </a>
        <a
          href="https://x.com/dmhabiburbd"
          target="_blank"
          className="p-1 duration-300 border-2 rounded-full hover:bg-white"
        >
          <FaTwitter className="text-2xl transition-all duration-100 hover:text-rose-700" />
        </a>
        <a
          href="https://wa.me/8801793741251"
          target="_blank"
          className="p-1 duration-300 border-2 rounded-full hover:bg-white"
        >
          <FaWhatsapp className="text-2xl transition-all duration-100 hover:text-green-700" />
        </a>
        <a
          href="https://www.fiverr.com/mostofahb?source=gig_page"
          target="_blank"
          className="p-1 duration-300 border-2 rounded-full hover:bg-white"
        >
          <TbBrandFiverr className="text-2xl transition-all duration-100 hover:text-green-700" />
        </a>
      </div>
      <h1 className="mx-auto">© 2024 Habibur Rahman. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
