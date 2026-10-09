"use client";

import React from 'react'
import { posts } from '@/velite-data';
import { Translate } from '@/components/language-provider';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';

import { motion } from 'framer-motion';

const coverDimensions: Record<string, { width: number; height: number }> = {
  "/asphalt/adls-cover.png": { width: 2606, height: 1414 },
  "/lint/lint-cover.png": { width: 2000, height: 887 },
  "/oklch/coverr.png": { width: 8523, height: 3780 },
  "/taxi/cover.png": { width: 2400, height: 1162 },
};

export const Case = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);
  const [isPointerActive, setIsPointerActive] = React.useState(false);

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
          opacity: isPointerActive ? 1 : 0,
          transform: `translate(16px, 16px) scale(${isPointerActive ? 1 : 0.5})`,
          transition: 'opacity 0.2s, transform 0.2s'
        }}
      >
        <Translate>Read case study</Translate> <HiChevronRight className="text-sm rtl:rotate-180" />
      </div>

      <div className="mt-8">
        <ul className="case-list group/list flex flex-col gap-8 pl-0 w-full">
          {selectedPosts.map((post) => (
            <li
              key={post.slug}
              className="group/item my-0 list-none transition-[filter,opacity,transform] duration-300 ease-out group-hover/list:blur-[3px] group-hover/list:opacity-30 group-hover/list:scale-[0.99] group-focus-within/list:blur-[3px] group-focus-within/list:opacity-30 group-focus-within/list:scale-[0.99] hover:!blur-0 hover:!opacity-100 hover:!scale-100 focus-within:!blur-0 focus-within:!opacity-100 focus-within:!scale-100"
            >
              <section
                className="flex flex-col md:flex-row gap-8 md:gap-16 cursor-none"
                onMouseEnter={() => {
                  setActiveSlug(post.slug);
                  setIsPointerActive(true);
                }}
                onMouseLeave={() => {
                  setActiveSlug(null);
                  setIsPointerActive(false);
                }}
                onFocus={() => setActiveSlug(post.slug)}
                onBlur={() => setActiveSlug(null)}
              >
                {/* Year Column */}
                <div className="md:w-24 shrink-0 pt-1">
                  <div className="dark:text-zinc-500 text-zinc-400 font-semibold text-sm sm:text-base tracking-widest uppercase">{post.date}</div>
                </div>

                {/* Content Column */}
                <div className="relative flex flex-col gap-4 flex-1">
                  <Link href={`/${post.slug}`} className="group no-underline">
                    <div className="flex flex-col gap-2">
                      <div
                        className="pointer-events-none absolute bottom-[calc(100%+16px)] left-0 z-40 w-full max-w-[420px] origin-bottom translate-y-3 scale-[0.98] opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover/item:translate-y-0 group-hover/item:scale-100 group-hover/item:opacity-100 group-focus-within/item:translate-y-0 group-focus-within/item:scale-100 group-focus-within/item:opacity-100"
                        aria-hidden="true"
                      >
                        <div className="overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] isolate dark:border-zinc-700 dark:bg-zinc-900">
                          <Image
                            src={post.image!}
                            width={coverDimensions[post.image!]?.width ?? 1000}
                            height={coverDimensions[post.image!]?.height ?? 600}
                            alt=""
                            className="m-0 h-auto w-full"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold my-0 text-zinc-800 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors tracking-tight">
                        {post.title}
                      </h3>
                      <div className="case-summary text-base font-normal leading-8 text-zinc-600 dark:text-zinc-400 my-2 max-w-xl">
                        {post.impact}
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
