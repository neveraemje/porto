"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


import { motion, LayoutGroup } from "framer-motion";

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Case studies",
      path: "/case",
    },
    {
      title: "Guestbook",
      path: "/book",
    },
    {
      title: "About me",
      path: "/about",
    },
  ];

  return (
    <>
      {/* Progressive Blur Soft Bottom Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-40 backdrop-blur-md [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent dark:from-zinc-800/60 pointer-events-none z-[41]" />

      <nav className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
        w-[calc(100%-24px)] sm:w-fit
        rounded-full border border-white/20 dark:border-neutral-800 
        transition-all duration-500 hover:scale-[1.02]
        shadow-[0_4px_12px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.1)]
      `}>
        {/* Background Layers Wrapper */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          {/* Glass Distortion & Blur */}
          <div className="absolute inset-0 z-0 backdrop-blur-[3px] [filter:url(#glass-distortion)]"></div>

          {/* Tint Layer */}
          <div className="absolute inset-0 z-[1] bg-white/50 dark:bg-black/50"></div>

          {/* Shine/Reflection Layer */}
          <div className="absolute inset-0 z-[2] 
          shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)] 
          dark:shadow-[inset_2px_2px_2px_rgba(255,255,255,0.1),inset_-2px_-2px_2px_rgba(0,0,0,0.2)]">
          </div>
          {/* <div className="absolute inset-0 z-[2] rounded-[inherit]
  shadow-[inset_2px_2px_2px_rgba(255,255,255,0.4),inset_-2px_-2px_2px_rgba(0,0,0,0.2)]
  dark:shadow-[inset_2px_2px_2px_rgba(255,255,255,0.1),inset_-2px_-2px_2px_rgba(0,0,0,0.4)]">
          </div> */}

        </div>

        <div className="relative z-[3] p-2 flex items-center justify-between w-full">
          {/* Group 1: Nav links */}
          <LayoutGroup id="navbar">
            <ul className="flex items-center font-medium text-xs sm:text-sm text-black dark:text-white gap-1">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={`
                    relative p-3 rounded-full transition-all duration-300
                    ${pathname == item.path
                      ? "text-white"
                      : "text-black/80 dark:text-white hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                    aria-current={pathname == item.path ? "page" : undefined}>
                    {pathname === item.path && (
                      <motion.div
                        layoutId="active-nav-bubble"
                        className="absolute inset-0 bg-teal-600/80 dark:bg-teal-500/80 rounded-full z-[-1]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-[1]">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </LayoutGroup>

          {/* Spacer */}
          <div className="w-20 shrink-0" />

          {/* Group 2: Resume */}
          <Link
            href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&e=1&dl=0"
            target="_blank"
            className="relative p-3 rounded-full font-medium text-xs sm:text-sm text-black/80 dark:text-white transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            <span className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/[0.1]" />
            <span className="relative z-[1]">Resume</span>
          </Link>
        </div>
      </nav>

      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </>
  );
};

export default NavBar;

