import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuUnfold4Line2 } from 'react-icons/ri';
import ThemeToggle from '@/layout/ThemeToggle';
import { useState } from 'react';

const navlinksItem = (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive ? ' font-medium   strikethrough-text' : 'text-white'
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? ' font-medium  strikethrough-text' : 'text-white'
      }
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'font-medium  strikethrough-text' : 'text-white'
      }
      to="/service"
    >
      Services
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? ' font-medium  strikethrough-text' : 'text-white'
      }
      to="/portfolio"
    >
      Portfolio
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive ? ' font-medium  strikethrough-text' : 'text-white'
      }
      to="/contact"
    >
      Contact
    </NavLink>
    <ThemeToggle/>
  </>
);


const NavLinks = (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-medium  hover:bg-slate-300 w-full text-center py-1  rounded-3xl'
          : ' hover:bg-slate-500 w-full text-center py-1  rounded-3xl'
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-medium  hover:bg-slate-300 w-full text-center py-1  rounded-3xl'
          : ' hover:bg-slate-500 w-full text-center py-1  rounded-3xl'
      }
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-medium  hover:bg-slate-300 w-full text-center py-1  rounded-3xl'
          : ' hover:bg-slate-500 w-full text-center py-1  rounded-3xl'
      }
      to="/service"
    >
      Services
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-medium  hover:bg-slate-300 w-full text-center py-1  rounded-3xl'
          : ' hover:bg-slate-500 w-full text-center py-1  rounded-3xl'
      }
      to="/portfolio"
    >
      Portfolio
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-blue-600 font-medium  hover:bg-slate-300 w-full text-center py-1  rounded-3xl'
          : ' hover:bg-slate-500 w-full text-center py-1  rounded-3xl'
      }
      to="/contact"
    >
      Contact
    </NavLink>
  </>
);


const Navbar = () => {
  const [active, setActive] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setActive(true);
    } else {
      setActive(false)
    }
  })
  
  
  
  
  return (
    <div className={`fixed z-30 w-full py-3 transition-colors duration-150 bg-slate-600  ${active ? '  text-white' : '!text-black'}`}>
      <nav className="flex items-center justify-between px-4">
        <div>
          <div className="flex items-center gap-1 text-2xl font-bold uppercase text-rose-60">
            <Link to='/' className="inline-block font-bold tracking-tighter text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 bg-clip-text font-fira">
              Habibur Rahman
            </Link>
          </div>
        </div>
        
        <div className="flex md:hidden">
          <div className='pt-1 mr-4'>
          <ThemeToggle />
          </div>
          <Sheet className="flex md:hidden">
            <SheetTrigger className="w-12 ">
              <RiMenuUnfold4Line2 className="w-full text-3xl opacity-75" />
            </SheetTrigger>
            <SheetContent className="flex md:hidden">
              <div className="mt-16">
                <h1 className="uppercase font-fira font-extrabold text-2xl tracking-[12px] bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 inline-block text-transparent bg-clip-text">
                  Habibur.
                </h1>
                <div className="flex flex-col gap-3 mt-20 font-medium tracking-widest transition-all duration-300 font-fira">
                  {NavLinks}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="items-center hidden gap-4 md:flex font-fira ">
          <ul className="flex items-center gap-6 px-8">{navlinksItem}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
