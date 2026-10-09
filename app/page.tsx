import { posts } from "@/velite-data"
import Link from "next/link"
import Image from "next/image";
import { HiArrowRight, HiChevronRight } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Case } from "@/components/case";
import Company from "@/components/company";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Translate } from "@/components/language-provider";

const projects = [
  {
    title: "PB Rabuan",
    stack: "Next.js · Supabase · Tailwind CSS · Vercel · Codex",
    href: "https://pb-rutinan-rabu-alpha.vercel.app/",
    icon: "/project-pb-rabuan.png",
  },
  {
    title: "Manazil Ibnu Abbas",
    stack: "Next.js · Sanity · Tailwind CSS · Netlify · Codex",
    href: "https://super-parfait-57f297.netlify.app/",
    icon: "/project-manazil.png",
  },
];


export default function Home() {
  return (
    <div className="home-page prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-auto">
      <section className="home-intro flex flex-col items-start gap-8 mb-14 sm:mt-14 mt-10">
        <div className="flex flex-col justify-start items-start gap-6 text-left w-full">
          <div className="flex justify-between items-center w-full">
            <Image
              src="/mj.png"
              width={100}
              height={100}
              alt="emje"
              className="rounded-full border border-neutral-200 dark:border-neutral-800 my-0"
            />
          </div>
          {/* <h1 className="max-w-2xl bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-2xl lg:text-4xl mb-0 tracking-tight py-1 font-bold">
            Product designer, system thinker, and occasional crafter.
          </h1> */}
          <h5 className="max-w-2xl text-zinc-600 dark:text-zinc-400 font-medium tracking-tight">
            <strong><Translate>{"I'm Emje,"}</Translate></strong> <Translate>a product designer from Indonesia.</Translate>
            <br />
            <Translate>I turning complexity into scalable systems and consistent experiences. Currently shaping design systems at</Translate> <a href="https://www.gojek.com/en-id/" target="_blank" className="underline decoration-green-600 font-semibold decoration-2 no-underline transition-colors">Gojek.</a>
          </h5>


          <Company />
        </div>
      </section>

      <hr className="my-14 border-zinc-200 dark:border-zinc-700" />

      <div className="mb-10">
        <div className="case-section-header flex justify-between items-end mb-8">
          <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 m-0">
            <Translate>Selected Case Study</Translate>
          </h2>
          {/* <Link
            href="/case-study"
            className="text-sm font-semibold text-zinc-500 hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-500 transition-colors no-underline flex items-center gap-1"
          >
            See all <HiChevronRight className="text-xs" />
          </Link> */}
          <Button variant="secondary" asChild>
            <Link href="/case" className=" flex items-center gap-1 no-underline pr-3">
              <Translate>See all</Translate> <HiChevronRight className="rtl:rotate-180" />
            </Link>
          </Button>

        </div>
        <Case />
      </div>

      <section aria-labelledby="projects-title" className="not-prose mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-700">
        <h2 id="projects-title" className="mb-5 text-xl font-bold tracking-normal text-zinc-800 dark:text-zinc-100"><Translate>Projects</Translate></h2>
        <ul className="m-0 list-none divide-y divide-zinc-200 p-0 dark:divide-zinc-800">
          {projects.map(({ title, stack, href, icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} (opens in a new tab)`}
                className="group flex items-center gap-4 rounded-lg py-5 outline-none transition-colors hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-4 dark:hover:bg-zinc-900 sm:gap-5"
              >
                <Image src={icon} alt="" width={64} height={64} sizes="(min-width: 640px) 64px, 56px" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold leading-snug text-zinc-800 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">{title}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{stack}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="mr-1 h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400" />
              </a>
            </li>
          ))}
        </ul>
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
