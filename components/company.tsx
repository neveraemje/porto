import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Company = () => {
  return (
   
     <div className="flex flex-col items-center space-y-4">
      <h4 className="text-zinc-500 dark:text-zinc-500 mb-0 font-medium">Company experiences</h4>
      <div className="flex -space-x-2 mt-0">
        <Link href="https://www.gojek.com/id-id/">
        <Image
          className="rounded-full border-2 border-white dark:border-zinc-900 hover:scale-125 z-10 transition duration-200 ease-in-out my-0"
          src="/company/gojek.png"
          width={40}
          height={40}
          alt="Gojek"
          title="Gojek"
        />
        </Link>
        <Link href="https://kata.ai/">
        <Image
          className="rounded-full border-2 border-white dark:border-zinc-900 hover:scale-125 z-10 transition duration-200 ease-in-out my-0"
          src="/company/kata.png"
          width={40}
          height={40}
          alt="Kata"
          title="Kata.ai"
        />
          </Link>
         <Link href="https://www.dot.co.id/">
        <Image
          className="rounded-full border-2 border-white dark:border-zinc-900 hover:scale-125 z-10 transition duration-200 ease-in-out my-0"
          src="/company/dot.png"
          width={40}
          height={40}
          alt="Dot"
          title="DOT Indonesia"
        />
        </Link>
         <Link href="https://sisi.id/">
        <Image
          className="rounded-full border-2 border-white dark:border-zinc-900 hover:scale-125 z-10 transition duration-200 ease-in-out my-0"
          src="/company/sisi.png"
          width={40}
          height={40}
          alt="Sisi"
          title="SISI"
        />
        </Link>
      </div>
      </div>
  );
};

export default Company;
