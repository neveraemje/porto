import React from 'react'
import Link from 'next/link'
import { HiDownload } from 'react-icons/hi'
import Button from '@/components/button'
import Image from 'next/image'


const page = () => {

  const experience = [
    {
      profile: "/company/gojek.png",
      name: "Gojek",
      position: "Product Designer - Design System",
      date: "2022 - Present"
    },
    {
      profile: "/company/kata.png",
      name: "Kata.ai",
      position: "Sr. Interaction Designer",
      date: "2019 - 2022"
    },
    {
      profile: "/company/dot.png",
      name: "DOT Indonesia",
      position: "UXUI Designer",
      date: "2018 - 2019"
    },
    {
      profile: "/company/sisi.png",
      name: "SISI",
      position: "UXUI Designer",
      date: "2017 - 2018"
    },
  ];

  const community = [
    {
      profile: "/company/ixda.png",
      name: "IxDA Chapter Malang",
      position: "Interaction Design Association",
      date: "2019 - Present"
    }
  ];



  return (
    <div className='py-6 prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-4 '>

{/* <div className=" flex flex-col items-center gap-8 lg:mt-14 mb-14 ">
  <div className=" flex flex-col justify-center items-center gap-2 text-center">
    <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses. </h1>
  <div className="columns-3 gap-4 space-y-4 mt-6 z-20">  
  <div className=" h-40 w-full relative">
    
    
   <img src="/profile/nike.png" className=" mt-0 object-cover w-full h-full rounded-lg"/>
  </div>
   <div className="h-80 w-full relative">
   <img src="/profile/kopi.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-80  w-full relative">
   <img src="/profile/umay.png" className=" mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-40  w-full relative">
   <img src="/profile/gunung.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-40  w-full relative">
   <img src="/profile/mj.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-80  w-full relative">
   <img src="/profile/talk.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
</div>






<p className='mt-6 text-lg dark:text-zinc-300 text-zinc-700'>I am Emje, an Informatics Engineering graduate. I started as a Graphic Designer, transitioned to UIUX Design in 2017, and then became an Interaction Designer at Kata.ai in 2019. Now, I am a full-time Product Designer at Gojek Design Team, working on the Asphalt Aloha Design System. With over 7 years of experience, I see design as an ever-changing journey, like a traveler seeking knowledge on an unknown path. It is like a hike with challenges, but I believe patience and resilience lead to success.</p>
  </div>

<Button href='https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&dl=0'>Download my resume <HiDownload/></Button>

  
</div> */}

<div className=" flex flex-col items-center gap-8 lg:mt-14 mb-14 ">
  <div className=" flex flex-col justify-center items-center gap-2 text-center">
    <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses. </h1>
  <div className="columns-2 sm:columns-3 gap-4 mt-6 z-20">  
  <div className=" h-40 w-full relative hidden sm:block mb-4">
   <img src="/profile/nike.png" className=" mt-0 object-cover w-full h-full rounded-lg"/>
  </div>
   <div className="h-80 w-full relative hidden sm:block">
   <img src="/profile/kopi.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-80  w-full relative mb-4">
   <img src="/profile/umay.png" className=" mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-40  w-full relative">
   <img src="/profile/gunung.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-40  w-full relative mb-4">
   <img src="/profile/mj.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
   <div className="h-80  w-full relative">
   <img src="/profile/talk.png" className="mt-0 object-cover h-full rounded-lg"/>
  </div>
</div>






<p className='mt-6 text-lg dark:text-zinc-300 text-zinc-700'>I am Emje, an Informatics Engineering graduate. I started as a Graphic Designer, transitioned to UIUX Design in 2017, and then became an Interaction Designer at Kata.ai in 2019. Now, I am a full-time Product Designer at Gojek Design Team, working on the Asphalt Aloha Design System. With over 7 years of experience, I see design as an ever-changing journey, like a traveler seeking knowledge on an unknown path. It is like a hike with challenges, but I believe patience and resilience lead to success.</p>
  </div>

<Button href='https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&dl=0'>Download my resume <HiDownload/></Button>

  
</div>

<section className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
  <h2 className=" md:w-12 flex text-lg font-semibold  text-zinc-600 dark:text-zinc-400 mr-12 mt-0">
    <span className=" ml-2">Work</span>
  </h2>
 


  <div className="flex flex-col gap-1 w-full mt-0">
  <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
    <span className=" ml-2"> 7+ years of professional experience in design</span>
  </h3>
    <ol className=" space-y-4 mt-0 pl-0">
    {experience.map((item, index) => (
           
            <li className="flex gap-4 " key={index}>
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src={item.profile} />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">{item.name}</dd>
          <div className="justify-between items-center w-full sm:flex">
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">{item.position}</dd>
          <dd className="text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0" aria-label="2019 until Present">
          {item.date}
          </dd>
          </div>
        </dl>
      </li>

           
          ))}
      
    </ol>
  </div>
</section>

<section className="flex flex-col md:flex-row gap-1 md:gap-12 w-full mt-10">
  <h2 className=" md:w-12 flex text-lg font-semibold  text-zinc-600 dark:text-zinc-400 mr-12 mt-0">
    <span className="ml-2">Community</span>
  </h2>
  <div className="flex flex-col gap-1 w-full mt-0">
  <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
    <span className=" ml-2">Engaged within the community.</span>
  </h3>
    <ol className=" space-y-4 mt-0 pl-0">
    {community.map((item, index) => (
           
            <li className="flex gap-4 " key={index}>
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src={item.profile} />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">{item.name}</dd>
          <div className=" justify-between sm:flex items-center w-full">
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">{item.position}</dd>
          <dd className="text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0" aria-label="2019 until Present">
          {item.date}
          </dd>
          </div>
        </dl>
      </li>

           
          ))}
      
    </ol>
  </div>
</section>



    </div>
  )
}

export default page