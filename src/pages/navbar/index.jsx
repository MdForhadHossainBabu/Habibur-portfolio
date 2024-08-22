import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavLink } from 'react-router-dom';
import { RiMenuUnfold4Line2 } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-1 uppercase text-2xl font-bold text-rose-60">
          <h1 className="font-bold bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text">
            Habibur
          </h1>
          <h1 className="bg-gradient-to-r from-cyan-500 to-rose-500 inline-block text-transparent bg-clip-text">
            Rahman
          </h1>
        </div>
      </div>
      <div className="md:hidden flex">
        <Sheet className="md:hidden flex">
          <SheetTrigger className="w-12 border">
            <RiMenuUnfold4Line2 className="text-3xl opacity-75 w-full" />
          </SheetTrigger>
          <SheetContent className="md:hidden flex">
            <div className='mt-16'>
              <h1 className="uppercase font-mont text-2xl tracking-[2px]">Habibur Rahman</h1>
              
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : ''
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : ''
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : ''
            }
            to="/service"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : ''
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : ''
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
