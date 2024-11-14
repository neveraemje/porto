

import User from "@/components/(guestbook)/User";

import { Metadata } from "next"
import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


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

const guestData = async() => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            cache: "no-cache"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch guest")
        }

        return res.json()
    } catch (error) {
        console.log("Erro fetch topic", error)
    }
} 


export default async function GuestBook() {

  interface Props  {
    name: string;
    photo: string;
    msg: string;
    _id: string;
    date?: string;
    timestamp: number;
  };


    const data = await guestData()
    if (!data) {
      return <div>Loading getting the data...</div>;
    }
    
        
    return (
        <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-6">
      
        <User/>
        <Suspense>
        <section className=" mx-0 sm:mx-10 mt-10">
            <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">

            <div className="flex flex-col gap-1 w-full mt-0">

  <ul className=" space-y-4 mt-0 pl-0">
  
  {data && data.guest && data.guest.slice().reverse().map((tamu: Props) => (

      <li className="flex gap-4 " key={tamu._id}>
        <Avatar>
  {/* <AvatarImage src={tamu.photo} /> */}
  <AvatarFallback>
  {tamu.name
        .split(" ") // Split the name into parts (first name, last name, etc.)
        .map((word) => word[0]) // Take the first letter of each part
        .slice(0, 2) // Get only the first two letters
        .join("") // Join them back together to form the initials
        .toUpperCase()} {/* Convert the initials to uppercase */}
  </AvatarFallback>
</Avatar>
      
        <div className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
        <div className="justify-between items-center w-full sm:flex">
            <div className=" text-sm text-teal-600 dark:text-teal-500 font-medium pl-0 pt-0 mt-0">
              {tamu.name}
            </div>
            
          </div>

          <div className="w-full flex-none text-base font-[450] text-zinc-700 dark:text-zinc-200 pl-0 pt-0 mt-0">
          {tamu.msg}
          </div>
        </div>
      </li>
))}

  </ul>
</div>
</div>
        </section>
        </Suspense>

        </div>
    )
}



// export const getProps = async () => {
//   const data = await guestData();

//   return {
//     data,
//   };
// };


export const runtime = 'edge'