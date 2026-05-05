import { notFound } from "next/navigation"
import { posts } from "@/velite-data"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Image from "next/image"
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import PostProgress from "@/lib/postProgress"
import { IBM_Plex_Sans } from "next/font/google"
import DynamicProgressPreview from "@/lib/dynamic_progress"


interface PostProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params: PostProps["params"]) {
  const { slug: slugArray } = await params
  const slug = slugArray?.join("/")
  const post = posts.find((post) => post.slugAsParams === slug)

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

export async function generateStaticParams(): Promise<Awaited<PostProps["params"]>[]> {
  return posts.map((post) => ({
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
      {/* <PostProgress post={post} /> */}
      {/* <DynamicProgressPreview /> */}
      <div className="prose dark:prose-invert max-w-3xl mx-auto px-6 sm:px-0">
        <div className=" mt-10">
          <Button variant="secondary" asChild>
            <Link href="/case" className=" flex items-center gap-1 no-underline pl-3">
              <HiChevronLeft /> Back
            </Link>
          </Button>
        </div>


        <section className="flex flex-col items-center gap-8 mb-14 mt-6">




          <div className=" flex flex-col justify-center items-center gap-2 text-center">

            <h2 className=" bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent 
     mb-6 mt-10 lg:px-10 lg:leading-tight lg:text-5xl sm:text-2xl sm:px-2">{post!.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium text-lg lg:px-10 sm:px-2">{post!.description}</p>
            <img src={post!.image} alt="" />
          </div>

        </section>




        <div className="flex flex-col md:flex-row gap-1">

          <div className="w-full md:w-1/4 ">
            <div className="">
              <div className=" text-sm">Published at</div>
              <div className=" flex items-center gap-2">
                <div className=" font-semibold text-base">{post!.date}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm">Project type</div>
              <div className=" flex items-center gap-2">
                <div className=" font-semibold text-base">{post!.project}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-sm">Company</div>
              <div className=" flex items-center gap-2">
                <img
                  src={post!.company_profile}
                  width={32}
                  height={32}
                  alt=""
                  title="Gojek"
                  className=" my-2"
                />
                <div className=" font-semibold">{post!.company_name}</div>
              </div>
            </div>



          </div>

          <hr className=" lg:hidden" />

          <div className="w-full md:w-3/4 flex flex-col">

            <div className="font-semibold text-base mb-2 dark:text-zinc-300">Impact</div>
            <div className="post-impact">{post!.impact}</div>


          </div>

        </div>


        <div className="flex flex-col md:flex-row gap-1 ">

          <hr className=" lg:hidden" />

          <div className="w-full flex flex-col prose-vercel"><Mdx code={post!.body} />

          </div>

        </div>


      </div>

      {/* Suggested Posts Section */}
      <div className="max-w-3xl mx-auto px-6 sm:px-0 mt-20 mb-20">
        <hr className="mb-12 border-zinc-200 dark:border-zinc-800" />
        <h3 className="text-xl font-semibold mb-8 text-zinc-800 dark:text-zinc-200">Other case studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...posts]
            .filter((p) => p.slugAsParams !== post.slugAsParams)
            .sort(() => 0.5 - Math.random()) // Randomize suggestions without mutating original array
            .slice(0, 2)
            .map((suggestedPost) => (
              <Link 
                key={suggestedPost.slug} 
                href={`/${suggestedPost.slug}`}
                className="group no-underline block"
              >
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-md isolate aspect-video">
                    <Image
                      src={suggestedPost.image!}
                      width={400}
                      height={225}
                      alt={suggestedPost.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors my-0">
                    {suggestedPost.title}
                  </h4>
                </div>
              </Link>
            ))}
        </div>
      </div>

    </>
  )
}


