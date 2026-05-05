import { posts } from "@/velite-data"
import Link from "next/link"
import Image from "next/image";
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Case } from "@/components/case";
import Company from "@/components/company";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";


export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-auto">
      <section className="flex flex-col items-start gap-8 mb-14 sm:mt-14 mt-10">
        <div className="flex flex-col justify-start items-start gap-6 text-left w-full">
          <div className="flex justify-between items-center w-full">
            <Image
              src="/mj.png"
              width={72}
              height={72}
              alt="emje"
              className="rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm my-0"
            />
            <ModeToggle />
          </div>
          <h1 className="max-w-2xl bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-2xl lg:text-4xl mb-0 tracking-tight py-1 font-bold">
            Product designer, system thinker, and occasional crafter.
          </h1>
          <h5 className="max-w-2xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
            I am Emje, a senior product designer from Indonesia, turning complexity into scalable systems and consistent experiences. Currently shaping design systems at <a href="https://www.gojek.com/en-id/" target="_blank" className="underline decoration-green-600 font-semibold decoration-2 no-underline transition-colors">Gojek</a>
          </h5>
          <Company />
        </div>
      </section>

      <hr className="my-14 border-zinc-200 dark:border-zinc-700" />

      <div className="mb-10">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 m-0">
            Selected Case Study
          </h2>
          {/* <Link
            href="/case-study"
            className="text-sm font-semibold text-zinc-500 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-500 transition-colors no-underline flex items-center gap-1"
          >
            See all <HiChevronRight className="text-xs" />
          </Link> */}
          <Button variant="secondary" asChild>
            <Link href="/case-study" className=" flex items-center gap-1 no-underline pr-3">
              See all <HiChevronRight /> 
            </Link>
          </Button>
          
        </div>
        <Case />
      </div>
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