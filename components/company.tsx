"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const companies = [
  {
    name: "Gojek",
    href: "https://www.gojek.com/id-id/",
    logo: "/company/gojek.png",
  },
  {
    name: "Kata.ai",
    href: "https://kata.ai/",
    logo: "/company/kata.png",
  },
  {
    name: "DOT Indonesia",
    href: "https://www.dot.co.id/",
    logo: "/company/dot.png",
  },
  {
    name: "SISI",
    href: "https://sisi.id/",
    logo: "/company/sisi.png",
  },
];

const Company = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex items-center gap-6 mb-2">
      {/* Custom Cursor Label */}
      <div
        className={`fixed pointer-events-none z-[100] bg-black/80 dark:bg-white/80 backdrop-blur-md text-white dark:text-black px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl transition-opacity duration-300 ease-out flex items-center gap-1 border border-white/20 dark:border-black/10`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: hoveredCompany ? 1 : 0,
          transform: `translate(12px, 12px) scale(${hoveredCompany ? 1 : 0.8})`,
          transition: 'opacity 0.2s, transform 0.2s'
        }}
      >
        {hoveredCompany}
      </div>

      <div className="flex -space-x-3 isolate items-center">
        {companies.map((company) => (
          <Link 
            key={company.name}
            href={company.href}
            onMouseEnter={() => setHoveredCompany(company.name)}
            onMouseLeave={() => setHoveredCompany(null)}
            className="group"
          >
            <div className="relative h-11 w-11 flex items-center justify-center">
              <Image
                className="rounded-full border-2 border-white dark:border-zinc-900 hover:scale-110 z-10 transition-all duration-300 ease-in-out my-0 shadow-sm group-hover:z-20 group-hover:relative"
                src={company.logo}
                width={44}
                height={44}
                alt={company.name}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center h-11">
        <h4 className="text-zinc-500 dark:text-zinc-500 m-0 p-0 font-medium text-xs sm:text-sm tracking-tight leading-snug text-left">
          9+ years <br />
          of professional experience.
        </h4>
      </div>
    </div>
  );
};

export default Company;

