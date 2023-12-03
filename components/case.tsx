import React from 'react'
import { allPosts } from '@/.contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';

export const Case = () => {
    const selectedPosts = allPosts.filter((post) => post.selected === true);
  return (
<div className="flex flex-col gap-4 mt-14 max-w-3xl" >
    
  <div className=" justify-between flex items-center">
    <h2 className=" text-2xl font-semibold my-0 text-zinc-800 dark:text-zinc-200">Selected case studies</h2>
    <Link href="/case" className=" text-teal-600 dark:text-teal-500 hover:underline flex items-center gap-1 no-underline">See all case studies <HiChevronRight/> </Link>
  </div>
        
  <ul className="flex flex-col gap-9 pl-0">
  {selectedPosts.map((post) => (
    <li key={post._id} className="list-none">
      <section className="flex flex-col md:flex-row gap md:gap-16">
        <p className="md:w-28 shrink-0 dark:text-zinc-400 text-zinc-600 font-medium mt-0">{post.date}</p>
        
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-zinc-800 dark:text-zinc-200 text-xl font-semibold my-0">{post.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 my-2">{post.impact}</p>
            <Image src={post.image!} width={718} height={404} alt="Image" className="mt-0 mb-4" />
           
          {/* <p className="text-gray-700 dark:text-zinc-400 my-2">{post.impact}</p> */}
          <Link href={post.slug} className=" text-teal-600 dark:text-teal-500 hover:underline flex items-center gap-1 no-underline"> Read case study <HiChevronRight/></Link>
          </div>

        </div>
      </section>
    </li>
  ))}
</ul>
        
       </div>

  )
}
