// "use client"

// import { useTheme } from "next-themes"

// export function ModeToggle() {
//   const { setTheme, theme } = useTheme()

//   return (
//     <button
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="border rounded-md w-6 h-6 flex items-center justify-center">
//       <span className="sr-only">Toggle mode</span>
//       {theme !== "dark" ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-4 h-4">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-4 h-4">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//           />
//         </svg>
//       )}
//     </button>
//   )
// }


"use client"

import React from "react"
import { useTheme } from "next-themes"
import { HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex rounded-full w-9 h-9 items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    )
  }

  const iconVariants = {
    sunHover: { rotate: 90, scale: 1.1 },
    moonHover: { rotate: -15, scale: 1.1 },
  };

  return (
    <motion.button
      whileHover="hover"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group flex bg-black/5 dark:bg-white/5 rounded-full w-9 h-9 items-center justify-center text-zinc-600 
      dark:text-white hover:text-teal-600 
      dark:hover:text-yellow-400 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
    >
      <span className="sr-only">Toggle mode</span>
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{ hover: iconVariants.sunHover }}
          >
            <HiSun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{ hover: iconVariants.moonHover }}
          >
            <HiMoon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
