"use client";

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { flushSync } from "react-dom";
import { arabic } from "@/lib/translations";

type Language = "en" | "ar";
type LanguageViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({ language: "en", setLanguage: () => {} });

export function LanguageProvider({ children, initialLanguage = "en" }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, updateLanguage] = useState<Language>(initialLanguage);
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("site-language");
      if (savedLanguage === "ar" || savedLanguage === "en") {
        updateLanguage(savedLanguage);
        document.cookie = `site-language=${savedLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
      }
    } catch { /* The switch still works when storage is unavailable. */ }
    const sync = (event: StorageEvent) => {
      if (event.key === "site-language") updateLanguage(event.newValue === "ar" ? "ar" : "en");
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);
  const setLanguage = (value: Language) => {
    if (value !== language) {
      const root = document.documentElement;
      root.dataset.languageTransition = value === "ar" ? "to-ar" : "to-en";
      const updatePage = () => {
        flushSync(() => updateLanguage(value));
        root.lang = value;
        root.dir = value === "ar" ? "rtl" : "ltr";
      };

      const transitionDocument = document as LanguageViewTransitionDocument;
      if (transitionDocument.startViewTransition) {
        const transition = transitionDocument.startViewTransition(updatePage);
        const clearDirection = () => delete root.dataset.languageTransition;
        transition.finished.then(clearDirection, clearDirection);
      } else {
        updatePage();
        window.setTimeout(() => delete root.dataset.languageTransition, 480);
      }
    }
    try { localStorage.setItem("site-language", value); } catch { /* Optional persistence. */ }
    try { document.cookie = `site-language=${value}; Path=/; Max-Age=31536000; SameSite=Lax`; } catch { /* Optional persistence. */ }
  };
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  const t = (english: string) => context.language === "ar" ? arabic[english.trim()] ?? english : english;
  return { ...context, t };
}

export function Translate({ children, ar }: { children: string; ar?: string }) {
  const { language, t } = useLanguage();
  const text = language === "ar" && ar ? ar : t(children);
  const [visibleText, setVisibleText] = useState(text);
  const previousText = useRef(text);

  useEffect(() => {
    if (previousText.current === text) return;
    previousText.current = text;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(text);
      return;
    }

    const characters = Array.from(text);
    const alphabet = language === "ar"
      ? Array.from("ابتثجحخدذرزسشصضطظعغفقكلمنهوي")
      : Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    const frames = 37;
    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      if (frame >= frames) {
        setVisibleText(text);
        window.clearInterval(interval);
        return;
      }

      const revealed = Math.ceil((characters.length * frame) / frames);
      setVisibleText(characters.map((character, index) => {
        if (!/[\p{L}\p{N}]/u.test(character) || index < revealed) return character;
        return alphabet[Math.floor(Math.random() * alphabet.length)];
      }).join(""));
    }, 40);

    return () => window.clearInterval(interval);
  }, [language, text]);

  return (
    <span>
      <span aria-hidden="true">{visibleText}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

export function Localized({ en, ar }: { en: ReactNode; ar: ReactNode }) {
  const { language } = useLanguage();
  return <>{language === "ar" ? ar : en}</>;
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const targetLanguage = language === "en" ? "ar" : "en";
  return (
    <button
      type="button"
      lang={targetLanguage}
      aria-label={targetLanguage === "ar" ? "Switch to Arabic" : "Switch to English"}
      title={targetLanguage === "ar" ? "Switch to Arabic" : "Switch to English"}
      onClick={() => setLanguage(targetLanguage)}
      className="navbar-language-toggle flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[11px] font-semibold text-zinc-600 transition-colors hover:bg-black/10 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-teal-400 sm:text-xs"
    >
      {targetLanguage.toUpperCase()}
    </button>
  );
}
