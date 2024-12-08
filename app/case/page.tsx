import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { CaseStudies } from "@/components/case2"

export default function Home() {
    return (

        <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-auto" >
            <div className=" flex flex-col justify-center items-center gap-2 text-center">
                <h1 className=" bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-4xl mb-0"> Case studies</h1>
            </div>
            <section className=" mx-0 sm:mx-10 mt-10">
                <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">

                    <CaseStudies />

                </div>
            </section>

        </div>










    )
}
