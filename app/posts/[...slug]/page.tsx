import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useRouter } from "next/navigation"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Image from "next/image"
import Link from "next/link"
import { HiChevronLeft } from "react-icons/hi"
import Footer from "@/components/Footer"
import Button from "@/components/button"

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

   
<div className="prose dark:prose-invert max-w-4xl ">
  <div className=" mt-10">
    <Link href="/case" className=" text-teal-600 dark:text-teal-500 hover:underline flex items-center gap-1 no-underline"><HiChevronLeft/> Back </Link></div>



<section className="flex flex-col items-center gap-8 mb-14 mt-6">


  

  <div className=" flex flex-col justify-center items-center gap-2 text-center">
    
    <h2 className=" bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-5xl mb-6 mt-10 px-10 leading-tight">{post.title}</h2>
    <p className="text-zinc-700 dark:text-zinc-300 font-medium text-lg px-10">{post.description}</p>
    <img src={post.image} alt=""/>
  </div>
  
</section>
</div>



     
      <article className="py-6 prose dark:prose-invert max-w-4xl prose-vercel">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="w-full md:w-1/4  gap-1">
        

          <div>
            <p className=" text-sm">Published at</p>
            <div className=" flex items-center gap-2">
            
          <p className=" font-medium">{post.date}</p> 
            </div>
          </div>

          <div className=" mt-4">
            <p className=" text-sm">Company</p>
            <div className=" flex items-center gap-2">
            <img
            src={post.company_profile}
            width={32}
            height={32}
            alt=""
            title="Gojek"
            className=" my-2"
            />
          <p className=" font-medium">{post.company_name}</p> 
            </div>
          </div>
       

        </div>

<div className="w-full md:w-3/4 flex flex-col"><Mdx code={post.body.code} />

</div>
      
      </div>

     
    </article>

    </>
  )
}
