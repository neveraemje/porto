"use client";

import React from 'react'
import { posts } from '@/velite-data';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';

import { motion } from 'framer-motion';

export const Case = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const selectedPosts = posts
    .filter((post) => post.selected === true)
    .sort((a, b) => {
      const dateA = new Date(a.date ?? 0);
      const dateB = new Date(b.date ?? 0);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div>
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

      <div className="mt-8">
        <ul className="flex flex-col gap-16 pl-0 w-full">
          {selectedPosts.map((post) => (
            <li key={post.slug} className="list-none">
              <section
                className="flex flex-col md:flex-row gap-8 md:gap-16 cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Year Column */}
                <div className="md:w-24 shrink-0 pt-1">
                  <div className="dark:text-zinc-500 text-zinc-400 font-semibold text-sm sm:text-base tracking-widest uppercase">{post.date}</div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-4 flex-1">
                  <Link href={`/${post.slug}`} className="group no-underline">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold my-0 text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 my-2 max-w-xl">
                        {post.impact}
                      </p>
                      <div className="overflow-hidden rounded-xl mt-4 isolate">
                        <Image
                          src={post.image!}
                          width={1000}
                          height={600}
                          alt={post.title}
                          className="mt-0 rounded-xl transition-transform duration-700 group-hover:scale-105 object-cover"
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
    </div>
  );
};
