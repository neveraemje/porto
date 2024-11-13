

import "./globals.css"

import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { SlidingTabBar } from "@/components/Slider"
import Footer from "@/components/Footer"
import NavBar from "@/components/navbar";
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Neveraemje",
//   description: "A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses.",
// }

export const metadata: Metadata = {
  title: {
    default: "emje.vercel.app",
    template: "%s | emje.vercel.app",
  },
  description: "A Product Designer and Coding Enthusiast with 7+ years of experience",
  openGraph: {
    title: "emje.vercel.app",
    description:
      "A Product Designer and Coding Enthusiast with 7+ years of experience",
    url: "https://emje.vercel.app/",
    siteName: "emje.vercel.app",
    images: [
      {
        url: "https://emje.vercel.app/thumbnail.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "neveraemje",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/mj.png",
  },
};


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-scree bg-white dark:bg-zinc-800 text-gray-800 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-screen mx-auto">
            
            <header className="sticky top-0  backdrop-blur-xl py-2 z-50">

             <NavBar/>
             {/* <SlidingTabBar/> */}
           
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
