"use client";
import React from 'react'
import Image from 'next/image';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ModeToggle } from './mode-toggle';

const NavBar = () => {
    
  const pathname = usePathname();

    const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Case studies",
      path: "/case",
    },
  ];

  return (

    <nav className=" py-0 mx-auto flex justify-between items-center ">

    <Link href="/" className=" hover:text-teal-500 hidden shrink-0 sm:block">
      <Image 
        src="/mj.png"
        width={40}
        height={40}
        alt="emje"
      />
    </Link>
      {/* <ul className="flex items-center gap-6 font-medium">
        <li><Link href="/" className=" hover:text-teal-500">Home</Link></li>
        <li><Link href="/about" className=" hover:text-teal-500">About</Link></li>
        <li><Link href="/case"className=" hover:text-teal-500">Case studies</Link></li>
      </ul> */}

      <ul className="flex items-center gap-2 font-medium text-sm text-zinc-600 dark:text-zinc-400">
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path} className={`hover:text-zinc-800 dark:hover:text-zinc-100 px-4 py-2 rounded-full bg-transparent${pathname == item.path ? " text-zinc-800 dark:text-zinc-100 bg-zinc-200/50 dark:bg-zinc-800" : "nav-menu"}`}
                aria-current={pathname == item.path ? "page" : undefined}>
                {item.title}
              </Link>
            </li>
          ))}

        </ul>
     
      <ModeToggle />
      

 
    </nav>



  )
}

export default NavBar


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import ModeToggle from "./(theme)/ModeToggle";
// import ThemeSwitcher from "./(theme)/ThemeSwitcher";

// const Header = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const menu = [
//     {
//       title: "Home",
//       path: "/",
//     },
//     {
//       title: "Getting started",
//       path: "/doc/getting-started",
//     },
//     {
//       title: "Foundation",
//       path: "/doc/foundation",
//     },
//     {
//       title: "Component",
//       path: "/doc/component",
//     },
//   ];

//   return (
//     <nav className="sticky top-0 z-40 w-full 
//     backdrop-blur-md flex-none 
//     transition-colors duration-500 
//     lg:z-50 lg:border-b lg:border-zinc-200/50 
//     dark:border-zinc-50/[0.06] bg-white/50 supports-backdrop-blur:bg-white/95 dark:bg-zinc-800/75">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="/asphalt.svg" className="h-8" alt="Flowbite Logo" />
//         <span className="self-centertext-lg font-semibold whitespace-nowrap dark:text-zinc-100">Asphalt Design System</span>
//       </a>
//       <button
//         data-collapse-toggle="navbar-default"
//         type="button"
//         className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         aria-controls="navbar-default"
//         aria-expanded={isMobileMenuOpen}
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//         </svg>
//       </button>
//       <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
//         <ul className="font-medium items-center justify-center text-sm flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
//           {menu.map((item, index) => (
//             <li key={index}>
//               <Link href={item.path} className={`block py-2 ${pathname == item.path ? "active-link" : "nav-menu"}`}
//                 aria-current={pathname == item.path ? "page" : undefined}>
//                 {item.title}
//               </Link>
//             </li>
//           ))}
//           <ModeToggle />
//         </ul>
//       </div>
//     </div>
//   </nav>
//   );
// };

// export default Header;