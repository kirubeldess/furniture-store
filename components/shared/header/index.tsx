// import { APP_NAME } from '@/lib/constants'
// // import Image from 'next/image'
// import Link from 'next/link'
// import Menu from './menu'
// import { Button } from '@/components/ui/button'
// import { MenuIcon } from 'lucide-react'
// import data from '@/lib/data'
// // import Search from './search'

// export default function Header() {
//   return (
//     <header className='bg-black  text-white'>
//       <div className='px-2'>
//         <div className='flex items-center justify-between'>
//           <div className='flex items-center'>
//             <Link
//               href='/'
//               className='flex items-center header-button font-extrabold text-2xl m-1 '
//             >
//               {APP_NAME}
//             </Link>
//           </div>
//           {/* <div className='hidden md:block flex-1 max-w-xl'>
//             <Search />
//           </div> */}
//           <Menu />
//         </div>
//         {/* <div className='md:hidden block py-2'>
//           <Search />
//         </div> */}
//       </div>
//       <div className='flex items-center px-3 mb-[1px]  bg-gray-800'>
//         <Button
//           variant='ghost'
//           className='header-button flex items-center gap-1 text-base [&_svg]:size-6'
//         >
//           <MenuIcon />
//           All
//         </Button>
//         <div className='flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]'>
//           {data.headerMenus.map((menu) => (
//             <Link
//               href={menu.href}
//               key={menu.href}
//               className='header-button !p-2'
//             >
//               {menu.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   )
// }




// import Link from 'next/link';
// import Search from './search'; // Ensure you have this component created
// import { APP_NAME } from '@/lib/constants';
// import data from '@/lib/data';
// import Menu from './menu';

// const Header = () => {
//   return (
//     <header
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/image_fx_.jpg')" }} // Update the path to your image
//     >
//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6">
//         <div className="text-white font-bold text-xl">
//           <Link href="/">
//             {APP_NAME}
//           </Link>
//         </div>
//         <ul className="flex space-x-6 text-white font-jost">
          
//           {data.headerMenus.map((menu) => (
//             <Link
//               href={menu.href}
//               key={menu.href}
//               className='header-button !p-2'
//             >
//               {menu.name}
//             </Link>
//           ))}
//           <Menu />
//         </ul>
//       </nav>
      
//       <div className="flex flex-col items-center justify-center h-full pb-18 gap-4">
//         <h2 className='font-englebert text-4xl'>Make your interior more minimal and modern</h2>
//         <Search />
//       </div>
//     </header>
//   );
// };

// export default Header;


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






