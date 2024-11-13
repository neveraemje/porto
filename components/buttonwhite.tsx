// components/Button.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  target?: string;  // Optional target property
  rel?: string;     // Optional rel property
}

const ButtonWhite = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href}
      className="
        no-underline
        relative m-1 inline-flex cursor-pointer items-center justify-center rounded-xl 
        border-b-4 
        border-l-2 
        border-r-2 
        border-t-4
        bg-gradient-to-br from-zinc-50 ZIN to-zinc-200
        border-zinc-300 
        border-r-zinc-200
        border-t-zinc-100 
        border-l-zinc-200 
        hover:bg-gradient-to-b hover:from-zinc-100 hover:to-zinc-50
         text-zinc-800 
        shadow-lg 
         shadow-zinc-200
          dark:shadow-none
        active:border-zinc-950 
        active:border-b-zinc-800
        active:border-t-4
        active:shadow-none
        px-3 py-1

        dark:from-zinc-600 dark:to-zinc-700
        dark:border-zinc-700
        dark:border-r-zinc-500/30
        dark:border-t-zinc-400/30
        dark:border-l-zinc-500/30
        dark:active:border-t-zinc-400 
        dark:active:border-r-zinc-400 
        dark:active:border-l-zinc-400 
        dark:active:border-b-zinc-300
         dark:text-white
        "
        

      >
        <span className="relative transition-all duration-100 ease-out active:translate-y-[0.1rem] flex items-center gap-2">{children}</span>

    </Link>
  );
};



export default ButtonWhite