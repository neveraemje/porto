"use client";

import React from 'react'
import { posts } from '@/velite-data';

import Image from 'next/image';
import Link from 'next/link';

import { HiChevronRight } from 'react-icons/hi';



export const CaseStudies = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date ?? 0); // Use 0 if 'date' is undefined
    const dateB = new Date(b.date ?? 0);
    return dateB.getTime() - dateA.getTime(); // Use getTime() to get the numeric value for comparison
  });

  return (
    <div className="flex flex-col gap-4 mt-6 max-w-3xl sm:mx-4" >
      {/* Custom Cursor Bubble */}
      <div
        className={`fixed pointer-events-none z-50 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-xs font-semibold shadow-xl transition-opacity duration-300 ease-out flex items-center gap-1`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          opacity: isHovering ? 1 : 0,
          transform: `translate(16px, 16px) scale(${isHovering ? 1 : 0.5})`,
          transition: 'opacity 0.2s, transform 0.2s'
        }}
      >
        Read case study <HiChevronRight className="text-sm" />
      </div>

      <ul className="flex flex-col gap-9 pl-0">
        {sortedPosts.map((post) => (
          <li key={post.slug} className="list-none">
            <section
              className="flex flex-col cursor-none"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex flex-col gap-4">
                <Link href={`/${post.slug}`} className="group no-underline">
                  <div className="flex flex-col gap-1">
                    <div className="dark:text-zinc-500 text-zinc-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">{post.date}</div>
                    <h3 className="text-xl font-semibold my-0 text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 my-2">{post.impact}</p>
                    <div className="overflow-hidden mt-0 mb-4 isolate">
                      <Image
                        src={post.image!}
                        width={718}
                        height={404}
                        alt="Image"
                        className="mt-0  transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </li>
        ))}
      </ul>

    </div>

  )
}
