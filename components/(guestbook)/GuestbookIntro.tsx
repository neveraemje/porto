"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Translate, useLanguage } from "@/components/language-provider";

const POSTCARD_WORDS = [
  "Postcard",
  "Kartu pos",
  "はがき",
  "بطاقة بريدية",
  "Открытка",
  "明信片",
  "Cartolina",
  "Postkarte",
] as const;

export default function GuestbookIntro() {
  const { language } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || language === "ar") return;

    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % POSTCARD_WORDS.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [reduceMotion, language]);

  return (
    <header className="mx-auto max-w-3xl py-6 text-center sm:py-8">
      <h1 className="m-0 flex flex-wrap items-center justify-center gap-x-1.5 text-3xl font-bold leading-tight tracking-normal text-zinc-900 dark:text-zinc-50 sm:gap-x-2 sm:text-5xl">
        {language === "ar" ? <span className="guestbook-intro-arabic bg-gradient-to-b from-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">البطاقات البريدية</span> : <><motion.span
          layout="position"
          className="bg-gradient-to-b from-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400"
          transition={{ layout: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >Guest</motion.span>
        <motion.span
          layout
          transition={{ layout: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="relative inline-flex h-[1.15em] items-center justify-center overflow-hidden text-center"
        >
          <span aria-hidden="true" className="invisible whitespace-nowrap">{POSTCARD_WORDS[wordIndex]}</span>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={POSTCARD_WORDS[wordIndex]}
              className="absolute inset-0 flex items-center justify-center whitespace-nowrap bg-gradient-to-b from-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400"
              initial={reduceMotion ? false : { opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: "100%" }}
              transition={{ type: "spring", stiffness: 230, damping: 24, mass: 0.8 }}
            >
              {POSTCARD_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span></>}
      </h1>
      <p className="mb-0 mt-6 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
        <Translate>Thank you for leaving a little note—a piece of your time that stays with us.</Translate>
      </p>
      {/* <p className="mb-0 mt-2 text-base font-medium leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
        Thank you for leaving a little note and your signature.
      </p> */}
    </header>
  );
}
