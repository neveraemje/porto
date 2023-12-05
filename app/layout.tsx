
import Link from "next/link"
import "./globals.css"

import { DM_Sans } from "next/font/google"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"
import Footer from "@/components/Footer"
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Neveraemje",
  description: "A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-scree bg-white dark:bg-zinc-900 text-gray-800 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-screen mx-auto">
            
            <header className="sticky top-0  backdrop-blur-xl py-2 z-50">

             <NavBar/>
           
            </header>
            
            <main className="max-w-3xl mx-auto">{children}</main>
            <Footer/>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>

      
    </html>
  )
}
