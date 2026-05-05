import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const pages = defineCollection({
    name: "Page",
    pattern: "pages/**/*.mdx",
    schema: s
        .object({
            title: s.string(),
            description: s.string().optional(),
            slug: s.path(),
            body: s.mdx(),
        })
        .transform(computedFields),
});

export const posts = defineCollection({
    name: "Post",
    pattern: "posts/**/*.mdx",
    schema: s
        .object({
            title: s.string(),
            description: s.string().optional(),
            date: s.string().optional(),
            image: s.string().optional(),
            company_profile: s.string().optional(),
            company_name: s.string().optional(),
            impact: s.string().optional(),
            selected: s.boolean().default(true),
            project: s.string().optional(),
            slug: s.path(),
            body: s.mdx(),
        })
        .transform(computedFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: "velite-data",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:8].[ext]",
        clean: true,
    },
    collections: { pages, posts },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    },
});
