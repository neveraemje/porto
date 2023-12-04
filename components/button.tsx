// components/Button.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href}
      className="
        no-underline
        relative m-1 inline-flex cursor-pointer items-center justify-center rounded-xl 
        border-b-4 
        border-l-2 
        border-r-2 
        border-t-4
        bg-gradient-to-br from-zinc-700 to-zinc-800
        border-zinc-900 
        border-r-zinc-600/60
        border-t-zinc-400/50 
        border-l-zinc-900/50 
        hover:bg-gradient-to-b hover:from-zinc-800 hover:to-zinc-800
        text-white 
        shadow-lg 
         shadow-zinc-500
          dark:shadow-zinc-700
         shad
        active:border-zinc-950 
        active:border-b-zinc-800
        active:border-t-4
        active:shadow-none
        px-3 py-1
        dark:text-zinc-800
        dark:from-zinc-100 dark:to-zinc-300
        dark:border-zinc-400
        dark:border-r-zinc-200
        dark:border-t-white
        dark:border-l-zinc-200
        dark:active:border-t-zinc-400 
        dark:active:border-r-zinc-400 
        dark:active:border-l-zinc-400 
        dark:active:border-b-zinc-300
        
        "
        

      >
        <span className="relative transition-all duration-100 ease-out active:translate-y-[0.1rem] flex items-center gap-2">{children}</span>

    </Link>
  );
};

export default Button;
