"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";
import { LanguageToggle, Translate } from "@/components/language-provider";
import { ModeToggle } from "@/components/mode-toggle";

const NavBar = () => {
  const pathname = usePathname();
  const activePath = pathname.startsWith("/posts/") ? "/case" : pathname;

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
      title: "About me",
      path: "/about",
    },
    {
      title: "Guestpost",
      path: "/postcard",
    },
  ];

  return (
    <div className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-24px)] -translate-x-1/2 items-center gap-2 sm:w-[664px] sm:max-w-[calc(100%-32px)]">
      <nav className={`
        relative h-12 min-w-0 flex-1 overflow-hidden rounded-full md:w-[600px] md:flex-none sm:h-14
        border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-950
        transition-shadow duration-500
        shadow-[0_8px_24px_rgba(0,0,0,0.12),0_0_1px_rgba(0,0,0,0.1)]
      `}>
        <div className="flex h-full w-full items-center justify-between p-1 sm:p-1.5">
          {/* Group 1: Nav links */}
          <LayoutGroup id="navbar">
            <ul className="flex items-center gap-0.5 font-medium text-[10px] text-black dark:text-white sm:gap-1 sm:text-sm">
              {menu.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={`
                    relative whitespace-nowrap px-1.5 py-2 sm:px-3 sm:py-2 rounded-full transition-all duration-300
                    ${activePath === item.path
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-black/80 dark:text-white hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                    aria-current={activePath === item.path ? (pathname === item.path ? "page" : "location") : undefined}>
                    {activePath === item.path && (
                      <>
                        <motion.div
                          layoutId="active-nav-bubble"
                          className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800 z-[-1]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                        <motion.span
                          layoutId="active-nav-topline"
                          aria-hidden="true"
                          className={`navbar-topline pointer-events-none absolute -top-2 bottom-0 border-t border-teal-500 sm:-top-2.5 ${item.path === "/" ? "left-0 -right-3" : "-left-3 -right-3"}`}
                          transition={{ type: "spring", bounce: 0.12, duration: 0.6 }}
                        />
                      </>
                    )}
                    <span className="relative z-[1]"><Translate>{item.title}</Translate></span>
                  </Link>
                </li>
              ))}
            </ul>
          </LayoutGroup>

          {/* <Link
            href="/postcard"
            aria-label={t("Guestpost")}
            aria-current={pathname === "/postcard" ? "page" : undefined}
            className={`relative inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-medium transition-colors duration-300 sm:px-3 sm:py-3 sm:text-sm ${language === "ar" ? "order-last" : "order-first"} ${pathname === "/postcard" ? "text-teal-600 dark:text-teal-400" : "text-black/80 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"}`}
          >
            <Translate>Guestpost</Translate>
          </Link> */}

          <div className="ml-1 flex shrink-0 items-center gap-1">
            <LanguageToggle />
          </div>

          {/* Resume temporarily hidden.
          <Link
            href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&e=1&dl=0"
            target="_blank"
            className="relative px-3 py-2 sm:px-3 sm:py-3 rounded-full font-medium text-[11px] sm:text-sm text-black/80 dark:text-white transition-all duration-300 hover:text-black dark:hover:text-white"
          >
            <span className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800" />
            <span className="relative z-[1]">Resume</span>
          </Link>
          */}
        </div>
      </nav>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
