import React from 'react'
import Link from 'next/link'
import { HiDownload } from 'react-icons/hi'
import Button from '@/components/button'

const page = () => {
  return (
    <div className='py-6 prose dark:prose-invert max-w-3xl my-10'>

<div className=" flex flex-col items-center gap-8 lg:mt-14 mb-14">
  <div className=" flex flex-col justify-center items-center gap-2 text-center">
    <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">A Product Designer, with +7 years of experience, specializes in crafting stable user-centered design and scalable software systems for businesses. </h1>
  <div className="columns-3 gap-4 space-y-4 mt-6">  
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
<p className='mt-6 text-lg px-10 dark:text-zinc-300 text-zinc-700'>I'm Emje, an Informatics Engineering graduate. I started as a Graphic Designer, transitioned to UIUX Design in 2017, and then became an Interaction Designer at Kata.ai in 2019. Now, I'm a full-time Product Designer at Gojek Design Team, working on the Asphalt Aloha Design System. With over 7 years of experience, I see design as an ever-changing journey, like a traveler seeking knowledge on an unknown path. It's like a hike with challenges, but I believe patience and resilience lead to success.</p>
  </div>

<Button href=''>Download my resume <HiDownload/></Button>

  
</div>

<section className="flex flex-col md:flex-row gap-1 md:gap-9 w-full">
  <h2 className="flex text-lg font-semibold  text-zinc-900 dark:text-zinc-100 mr-12">
    <span className=" ml-2">Experience</span>
  </h2>
  <div className="flex flex-col gap-1 w-full mt-0">
    <ol className=" space-y-4 mt-0">
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src="/company/gojek.png" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">Gojek</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">Product Designer - Design System</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0" aria-label="2019 until Present">
            <time dateTime="2019">2022</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2023">Present</time>
          </dd>
        </dl>
      </li>

      <li className="flex gap-4">
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src="/company/kata.png" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 mt-0">Kata.ai</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0">Senior Interaction Designer</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0" aria-label="2019 until Present">
            <time dateTime="2019">2019</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2023">2022</time>
          </dd>
        </dl>
      </li>

      <li className="flex gap-4">
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src="/company/dot.png" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 mt-0">DOT Indonesia</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0">UIUX Designer</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0" aria-label="2019 until Present">
            <time dateTime="2019">2018</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2023">2019</time>
          </dd>
        </dl>
      </li>

      <li className="flex gap-4">
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src="/company/sisi.png" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 mt-0">SISI</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0">UIUX Designer</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 mt-0" aria-label="2019 until Present">
            <time dateTime="2019">2017</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2023">2018</time>
          </dd>
        </dl>
      </li>
      
    </ol>
  </div>
</section>



<section className="flex flex-col md:flex-row gap-1 md:gap-9 w-full mt-14">
  <h2 className="flex text-lg font-semibold  text-zinc-900 dark:text-zinc-100 mr-12">
    <span className=" ml-2">Community</span>
  </h2>
  <div className="flex flex-col gap-1 w-full mt-0">
    <ol className="mt-0 space-y-4">
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
          <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-12 w-12 rounded-full" src="/company/ixda.png" />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">IxDA Chapter Malang</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">Interaction Design Association</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0" aria-label="2019 until Present">
            <time dateTime="2019">2019</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2023">Present</time>
          </dd>
        </dl>
      </li>

    </ol>
  </div>
</section>



    </div>
  )
}

export default page