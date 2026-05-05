"use client"
import Image from "next/image"
import * as runtime from "react/jsx-runtime"
import { useMemo } from "react"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return useMemo(() => fn({ ...runtime }).default, [code])
}

import dynamic from "next/dynamic"

const DynamicColorPreview = dynamic(() => import("@/lib/dynamic"), { ssr: false })

const components = {
  Image,
  DynamicColorPreview,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}
