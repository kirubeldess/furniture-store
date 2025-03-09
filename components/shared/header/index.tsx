import Link from 'next/link';
import Search from './search'; // Ensure you have this component created
import { APP_NAME } from '@/lib/constants';
import data from '@/lib/data';
import Menu from './menu';
// import Menu from './menu';

const Header = () => {
  return (
    <header
      className="relative h-96 sm:h-[70vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/rec.png')" }} 
    >

        <nav className="absolute top-0 left-0 w-full flex items-center justify-center p-6">
          <div className="text-white font-bold text-sm md:text-xl absolute left-6">
            <Link href="/">{APP_NAME}</Link>
          </div>

          <ul className="flex items-center space-x-4 text-white font-jost text-sm md:text-xl">
            {data.headerMenus.map((menu) => (
              <li key={menu.href}>
                <Link href={menu.href} className="header-button !p-2">
                  {menu.name}
                </Link>
              </li>
            ))}

            <Link href="/" className="header-button !p-2 hidden md:inline-block">
              About Us
            </Link>
            <Link href="/" className="header-button !p-2 hidden md:inline-block">
              Contact Us
            </Link>
          </ul>

          <div className="absolute right-6">
            <Menu />
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center h-full pb-18 gap-4 ">
          <h2 className="text-white font-jost font-bold text-2xl md:text-5xl text-center">Make your interior more minimal and modern</h2>
          <p className='text-sm hidden md:block text-gray-400 text-center p-2'>Turn your room with us into a lot more minimalist and modern with ease and speed</p>
          <div className=''>
            <Search/>
          </div>
        </div>
    </header>
  );
};

export default Header;






