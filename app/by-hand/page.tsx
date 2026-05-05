"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const handWorks = [
  {
    id: 1,
    title: "Brakiasi",
    description: "A solid wood climbing frame for children, designed for safety and durability.",
    image: "/by-hand/brakiasi.jpeg",
  },
  {
    id: 2,
    title: "Toys Storage",
    description: "A modular storage system for toys, featuring clean lines and natural wood finish.",
    image: "/by-hand/toys-storage.jpeg",
  },
  {
    id: 3,
    title: "Cactus",
    description: "A modular storage system for toys, featuring clean lines and natural wood finish.",
    image: "/by-hand/cactus.jpeg",
  },
  {
    id: 4,
    title: "Group Cactus",
    description: "A modular storage system for toys, featuring clean lines and natural wood finish.",
    image: "/by-hand/group-cactus.jpeg",
  },
];

export default function ByHandPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-b from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
          By Hand
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
          Outside of pixels and code, I spend my time working with wood. There's a unique satisfaction in building something tangible that lives in the physical world. 🪚🪵
        </p>
      </motion.div>

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
        {handWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl break-inside-avoid bg-zinc-100 dark:bg-zinc-900"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay & Title on Hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 pt-16 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <h3 className="text-sm sm:text-base font-bold tracking-tight text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {work.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 pt-10 border-t border-zinc-100 dark:border-zinc-800 max-w-3xl"
      >
        <p className="text-zinc-400 dark:text-zinc-600 text-sm italic">
          More projects coming soon as I continue to explore the art of carpentry.
        </p>
      </motion.div>
    </div>
  );
}
