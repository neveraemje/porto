// import { defineDocumentType, makeSource } from "contentlayer/source-files"

// /** @type {import('contentlayer/source-files').ComputedFields} */
// const computedFields = {
//   slug: {
//     type: "string",
//     resolve: (doc) => `/${doc._raw.flattenedPath}`,
//   },
//   slugAsParams: {
//     type: "string",
//     resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
//   },
// }

// export const Page = defineDocumentType(() => ({
//   name: "Page",
//   filePathPattern: `pages/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//   },
//   computedFields,
// }))

// export const Post = defineDocumentType(() => ({
//   name: "Post",
//   filePathPattern: `posts/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//     date: {
//       type: "date",
//       required: true,
//     },
//   },
//   computedFields,
// }))

// export default makeSource({
//   contentDirPath: "./content",
//   documentTypes: [Post, Page],
// })

import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    impact: {
      type: "string",
    },
    date: {
      type: "string",
    },
    image: {
      type: "string",
    },
    company_profile: {
      type: "string",
    },
    company_name: {
      type: "string",
    },
    selected: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
})
