"use client"
import Image from "next/image"
import * as runtime from "react/jsx-runtime"
import { useMemo } from "react"
import { useLanguage } from "@/components/language-provider"

const useMDXComponent = (code: string) => {
  return useMemo(() => new Function(code)({ ...runtime }).default, [code])
}

import dynamic from "next/dynamic"

const DynamicColorPreview = dynamic(() => import("@/lib/dynamic"), { ssr: false })

const components = {
  Image,
  DynamicColorPreview,
}

interface MdxProps {
  code: string
  arabicCode?: string
}

export function Mdx({ code, arabicCode }: MdxProps) {
  const { language } = useLanguage();
  const Component = useMDXComponent(language === "ar" && arabicCode ? arabicCode : code)
  return <Component components={components} />
}
