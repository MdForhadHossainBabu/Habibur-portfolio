import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-400 py-12 items-center justify-center mx-auto">
      <div className="flex items-center gap-4 mx-auto">
        <a
          target="_blank"
          className="border-2 p-1 rounded-full hover:bg-white duration-300"
          href="https://www.facebook.com/dmhabiburbd1"
        >
          <FaFacebook className="text-2xl hover:text-blue-700 transition-all duration-100" />
        </a>
        <a
          href="https://www.instagram.com/dmhabiburbd1"
          target="_blank"
          className="border-2 p-1 rounded-full hover:bg-white duration-300"
        >
          <FaInstagram className="text-2xl hover:text-rose-700 transition-all duration-100" />
        </a>
        <a
          href="https://x.com/dmhabiburbd"
          target="_blank"
          className="border-2 p-1 rounded-full hover:bg-white duration-300"
        >
          <FaTwitter className="text-2xl hover:text-rose-700 transition-all duration-100" />
        </a>
        <a
          href="https://wa.me/8801793741251"
          target="_blank"
          className="border-2 p-1 rounded-full hover:bg-white duration-300"
        >
          <FaWhatsapp className="text-2xl hover:text-green-700 transition-all duration-100" />
        </a>
        <a
          href="https://www.fiverr.com/mostofahb?source=gig_page"
          target="_blank"
          className="border-2 p-1 rounded-full hover:bg-white duration-300"
        >
          <TbBrandFiverr className="text-2xl hover:text-green-700 transition-all duration-100" />
        </a>
      </div>
      <h1 className="mx-auto">© 2024 Habibur Rahman. All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
