"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

export default function CaseSectionNav() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const [sections, setSections] = useState<HTMLElement[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const article = document.getElementById("case-study");
    if (!article) return;
    const headings = Array.from(article.querySelectorAll<HTMLElement>("[data-case-body] h2"));
    const targets = [article, ...headings];
    setSections(targets);
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = 0;
      targets.forEach((target, index) => {
        if (target.getBoundingClientRect().top <= 160) current = index;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname, language]);

  return (
    <nav aria-label={t("Case study sections")} className="fixed start-6 top-1/2 z-30 hidden max-h-[60vh] -translate-y-1/2 flex-col overflow-y-auto xl:flex 2xl:start-12">
      {sections.map((section, index) => {
        const label = index === 0 ? t("Overview") : section.textContent || `${language === "ar" ? "القسم" : "Section"} ${index}`;
        return (
          <button
            key={index}
            type="button"
            aria-label={label}
            title={label}
            aria-current={active === index ? "location" : undefined}
            onClick={() => window.scrollTo({
              top: window.scrollY + section.getBoundingClientRect().top - 128,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            })}
            className="group flex h-6 w-8 shrink-0 items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <span className={`h-[2px] rounded-full transition-all duration-200 motion-reduce:transition-none ${active === index ? "w-6 bg-zinc-900 dark:bg-zinc-100" : "w-3 bg-zinc-400 group-hover:w-4 group-hover:bg-zinc-600 dark:bg-zinc-600 dark:group-hover:bg-zinc-300"}`} />
          </button>
        );
      })}
    </nav>
  );
}
