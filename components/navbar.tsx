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
      title: "About",
      path: "/about",
    },
    {
      title: "Case studies",
      path: "/case",
    },
    {
      title: "Guestbook",
      path: "/book",
    },
  ];

  return (

    <nav className="px-4 md:px-0 py-1 max-w-[700px] mx-auto flex justify-between items-center">

    <Link href="/" className=" hover:text-teal-500 hidden shrink-0 sm:block">
    <Image 
        src="/mj.png"
        width={40}
        height={40}
        alt="emje"
      />
    </Link>

      <ul className="flex items-center font-medium text-sm text-zinc-600 dark:text-zinc-400">
        {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path} className={`
              hover:text-zinc-800 dark:hover:text-zinc-100  sm:px-4 sm:py-2 px-3 py-2 rounded-full bg-transparent${pathname == item.path 
                ? 
                " text-zinc-800 dark:text-zinc-100 bg-zinc-200/50 dark:bg-zinc-800" 
                : 
                "nav-menu" }`}
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
