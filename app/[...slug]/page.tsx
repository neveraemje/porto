import { notFound } from "next/navigation"
import { Metadata } from "next"
import { pages } from "@/velite-data"

import { Mdx } from "@/components/mdx-components"

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPageFromParams(params: PageProps["params"]) {
  const { slug: slugArray } = await params
  const slug = slugArray?.join("/")
  const page = pages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<Awaited<PageProps["params"]>[]> {
  return pages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-4xl my-10">
      {/* <h1>{page.title}</h1> */}
      {/* {page.description && <p className="text-3xl font-medium">{page.description}</p>} */}
      {/* <hr /> */}
      <Mdx code={page!.body} />
    </article>
  )
}
