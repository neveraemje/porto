import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { Case } from "@/components/case";
import Company from "@/components/company";
import Button from "@/components/button";
import ButtonWhite from "@/components/buttonwhite";


export default function Home() {
  

  return (
    <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-6" >
           
           <section className=" flex flex-col items-center gap-8  mb-14 sm:mt-14 mt-10">

    <Company/>
  <div className=" flex flex-col justify-center items-center gap-6 text-center">
    <h1 className=" max-w-2xl bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-5xl mb-0"> Product Designer & Coding Enthusiast</h1>
    <h5 className=" max-w-2xl text-zinc-600 dark:text-zinc-400 font-medium lg:px-10 sm:px0">
      {/* I am Emje, a product designer from Indonesia with seven years of design experience. Currently working as a Product Designer at the Gojek Design Team 🪄✨🏕️.
       */}

I am Emje, a Senior Product Designer and coding enthusiast from Indonesia. 

Currently shaping experiences at <span className="not-prose inline-flex mx-1">
              <a
                href="https://www.gojek.com/en-id/"
                target="_blank"
                className="underline decoration-green-600 font-semibold decoration-2"
              >
                Gojek
              </a>
            </span> as a Product Designer in the Design System team. 🪄✨🏕️☕

      
      </h5>

        <div className="">
        <Button 
  href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&e=1&dl=0" 
  target="_blank" 
  
>
  Resume
</Button>
    <ButtonWhite  href="/about">About me</ButtonWhite>
   
        </div>
   


    {/* <Company/> */}

  </div>
  
</section>
           
           
            
        <section className=" mx-0 sm:mx-10 mt-10">
            <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">

            <Case/>

            </div>
      </section>

       </div>

    


  )
}




{/* <div className="prose dark:prose-invert max-w-3xl mx-4">
<section className=" flex flex-col items-center gap-8  mb-14 sm:mt-14 mt-10">
  <div className=" flex flex-col justify-center items-center gap-6 text-center">
    <h1 className=" max-w-2xl bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-5xl mb-0"> Product Designer & Code Enthusiast</h1>
    <h5 className=" max-w-2xl text-zinc-600 dark:text-zinc-400 font-medium lg:px-10 sm:px0">I am Emje, a product designer from Indonesia with seven years of design experience. Currently working as a Product Designer at the Gojek Design Team 🪄✨🏕️.</h5>

    <Button  href="/about">About us</Button>
   


    <Company/>

  </div>
  
</section>

<hr />
<div className="flex flex-col gap-4 mt-20 prose dark:prose-invert max-w-3xl lg:mx-8 sm:mx-4">
<Case/>
</div>




    </div> */}