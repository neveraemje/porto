

import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { SlidingTabBar } from "@/components/Slider"
import Footer from "@/components/Footer"
import NavBar from "@/components/navbar";
import GuestCard from "@/components/(guestbook)/User";
import { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { cookies } from "next/headers"


// export const metadata = {
//   title: "Neveraemje",
//   description: "A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses.",
// }

export const metadata: Metadata = {
  title: {
    default: "emje.vercel.app",
    template: "%s | emje.vercel.app",
  },
  description: "A Product Designer and Coding Enthusiast with 9+ years of experience",
  openGraph: {
    title: "emje.vercel.app",
    description:
      "A Product Designer and Coding Enthusiast with 9+ years of experience",
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

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get("site-language")?.value === "ar" ? "ar" : "en";

  return (
    <html lang={initialLanguage} dir={initialLanguage === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased min-h-screen bg-white dark:bg-zinc-800 text-gray-800 dark:text-slate-50"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider initialLanguage={initialLanguage}>
          <NavBar />
          <div className="max-w-screen mx-auto">
            <main className="w-full mx-auto pt-24 pb-12">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <GuestCard />
          </LanguageProvider>
        </ThemeProvider>
      </body>


    </html>
  )
}
