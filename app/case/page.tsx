import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { CaseStudies } from "@/components/case2"

export default function Home() {
  return (
    <div>
        
        
        <div className="flex flex-col gap-4  prose dark:prose-invert max-w-3xl mx-4 sm:mt-14 mt-10" >
        <section className=" flex flex-col items-center gap-8 lg:mt-14 mb-14">
  <div className=" flex flex-col justify-center items-center gap-2 text-center">
    <h1 className=" bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-4xl mb-0"> Case studies</h1>
   


  </div>
  
</section>
 
 <CaseStudies/>


       </div>









    </div>
  )
}
