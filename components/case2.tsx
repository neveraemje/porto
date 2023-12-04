import React from 'react'
import { allPosts } from '@/.contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { HiChevronRight } from 'react-icons/hi';



export const CaseStudies = () => {
 
   const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.date ?? 0); // Use 0 if 'date' is undefined
    const dateB = new Date(b.date ?? 0);
    return dateB.getTime() - dateA.getTime(); // Use getTime() to get the numeric value for comparison
  });

   
  return (
<div className="flex flex-col gap-4 mt-14 max-w-3xl sm:mx-4" >

        
  <ul className="flex flex-col gap-9 pl-0">
  {sortedPosts.map((post) => (
    <li key={post._id} className="list-none">
      <section className="flex flex-col md:flex-row gap md:gap-16">
        <div className="md:w-14 shrink-0 dark:text-zinc-400 text-zinc-600 font-medium mt-0">{post.date}</div>
        
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-zinc-800 dark:text-zinc-200 text-xl font-semibold my-0">{post.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 my-2">{post.impact}</p>
            <Image src={post.image!} width={718} height={404} alt="Image" className="mt-0 mb-4" />
           
          {/* <p className="text-gray-700 dark:text-zinc-400 my-2">{post.impact}</p> */}
          <Link href={post.slug} className=" text-teal-600 dark:text-teal-500 hover:underline flex items-center gap-1 no-underline text-base"> Read case study <HiChevronRight/></Link>
          </div>

        </div>
      </section>
    </li>
  ))}
</ul>
        
       </div>

  )
}
