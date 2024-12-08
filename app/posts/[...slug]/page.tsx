import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useRouter } from "next/navigation"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Image from "next/image"
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import Footer from "@/components/Footer"
import Button from "@/components/button"

import { IBM_Plex_Sans } from "next/font/google"



interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {

  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>


<div className="prose dark:prose-invert max-w-4xl mx-4">
        <div className=" mt-10">
          <Link href="/case" className=" text-teal-600 dark:text-teal-500 hover:underline flex items-center gap-1 no-underline"><HiChevronLeft /> Back </Link></div>

        {/* <button type="button" aria-label="Go back to articles" 
    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20">
<HiArrowNarrowLeft/> 
</button> */}


        <section className="flex flex-col items-center gap-8 mb-14 mt-6">




          <div className=" flex flex-col justify-center items-center gap-2 text-center">

            <h2 className=" bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent 
     mb-6 mt-10 lg:px-10 lg:leading-tight lg:text-5xl sm:text-2xl sm:px-2">{post.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium text-lg lg:px-10 sm:px-2">{post.description}</p>
            <img src={post.image} alt="" />
          </div>

        </section>
  


   
      <div className="flex flex-col md:flex-row gap-1">

        <div className="w-full md:w-1/4 ">
          <div className="">
            <div className=" text-sm">Published at</div>
            <div className=" flex items-center gap-2">
              <div className=" font-semibold text-base">{post.date}</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm">Project type</div>
            <div className=" flex items-center gap-2">
              <div className=" font-semibold text-base">{post.project}</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm">Company</div>
            <div className=" flex items-center gap-2">
              <img
                src={post.company_profile}
                width={32}
                height={32}
                alt=""
                title="Gojek"
                className=" my-2"
              />
              <div className=" font-semibold">{post.company_name}</div>
            </div>
          </div>



        </div>

        <hr className=" lg:hidden" />

        <div className="w-full md:w-3/4 flex flex-col">
        
          <div className="font-semibold text-base mb-2 dark:text-zinc-300">Impact</div>
          <div className="post-impact">{post.impact}</div>


        </div>

      </div>
   





      
        <div className="flex flex-col md:flex-row gap-1 ">

          <hr className=" lg:hidden" />

          <div className="w-full flex flex-col prose-vercel"><Mdx code={post.body.code} />

          </div>

        </div>


        </div>

    </>
  )
}


