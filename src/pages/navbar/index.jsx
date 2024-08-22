import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuUnfold4Line2 } from 'react-icons/ri';

const navlinksItem = (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-blue-300 font-medium border-b-2 border-b-rose-600' : ''
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-blue-300 font-medium border-b-2 border-b-rose-600' : ''
      }
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-blue-300 font-medium border-b-2 border-b-rose-600' : ''
      }
      to="/service"
    >
      Services
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-blue-300 font-medium border-b-2 border-b-rose-600' : ''
      }
      to="/portfolio"
    >
      Portfolio
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-blue-300 font-medium border-b-2 border-b-rose-600' : ''
      }
      to="/contact"
    >
      Contact
    </NavLink>
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
  return (
    <div className="fixed w-full z-30  py-2 text-white rounded-lg bg-slate-800 navShadow">
      <nav className="flex items-center justify-between px-4">
        <div>
          <div className="flex items-center gap-1 uppercase text-2xl font-bold text-rose-60">
            <Link to='/' className="font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 inline-block text-transparent bg-clip-text tracking-tighter font-fira">
              Habibur Rahman
            </Link>
          </div>
        </div>
        <div className="md:hidden flex">
          <Sheet className="md:hidden flex">
            <SheetTrigger className="w-12 ">
              <RiMenuUnfold4Line2 className="text-3xl opacity-75 w-full" />
            </SheetTrigger>
            <SheetContent className="md:hidden flex">
              <div className="mt-16">
                <h1 className="uppercase font-fira font-extrabold text-2xl tracking-[12px] bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 inline-block text-transparent bg-clip-text">
                  Habibur.
                </h1>
                <div className="flex flex-col gap-3 mt-20 transition-all duration-300 font-medium tracking-widest font-fira">
                  {NavLinks}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex  items-center gap-4 font-fira ">
          <ul className="flex items-center gap-4 border px-8 rounded-full py-1">{navlinksItem}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
