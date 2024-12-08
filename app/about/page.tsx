import React from "react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import nike from "public/profile/nike.png";
import gunung from "public/profile/gunung.png";
import kitab from "public/profile/kitab.png";
import kopi from "public/profile/kopi.png";
import mj from "public/profile/MJ.png";
import talk from "public/profile/talk.png";
import umay from "public/profile/umay.png";

const page = () => {
  const experience = [
    {
      profile: "/company/gojek.png",
      name: "Gojek",
      position: "Product Designer - Design System",
      date: "2022 - Present",
    },
    {
      profile: "/company/kata.png",
      name: "Kata.ai",
      position: "Sr. Interaction Designer",
      date: "2019 - 2022",
    },
    {
      profile: "/company/dot.png",
      name: "DOT Indonesia",
      position: "UXUI Designer",
      date: "2018 - 2019",
    },
    {
      profile: "/company/sisi.png",
      name: "SISI",
      position: "UXUI Designer",
      date: "2017 - 2018",
    },
  ];

  const community = [
    {
      profile: "/company/ixda.png",
      name: "IxDA Chapter Malang",
      position: "Interaction Design Association",
      date: "2019 - Present",
    },
  ];
  const contribution = [
    {
      object: "Actively in the Interaction Design Association community (IxDA) chapter Malang",
    },
    {
      object: "As a Reviewer in Portfolio Review IxDA Chapter Malang, 2019",
    },
    {
      object: "As a keynote speaker cangkrUXan #5 IxDA Malang in DiLo Malang, Jun 25, 2019.",
    },
    {
      object: "As an online speaker and mentor in Asia Virtual Hackfest, Asia University Malang, Nov 27 - Dec 4, 2021.",
    },

  ];

  return (
    <div className="prose dark:prose-invert max-w-3xl sm:mt-14 mt-10 mx-6 sm:mx-auto">
      {/* <div className=" flex flex-col gap-8 lg:mt-14 mb-14 mx-8">
        <div className=" flex flex-col justify-center items-center gap-2 text-center">
          <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">
            A Product Designer, with +7 years of experience, specializes in
            crafting stable user-centered design and scalable software systems
            for businesses.{" "}
          </h1>
          <div className="columns-2 sm:columns-3 gap-4 mt-6 z-20">
            <div className=" h-40 w-full relative hidden sm:block mb-4">
              <img
                src="/profile/nike.png"
                className=" mt-0 object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="h-80 w-full relative hidden sm:block">
              <img
                src="/profile/kopi.png"
                className="mt-0 object-cover h-full rounded-lg"
              />
            </div>
            <div className="h-80  w-full relative mb-4">
              <img
                src="/profile/umay.png"
                className=" mt-0 object-cover h-full rounded-lg"
              />
            </div>
            <div className="h-40  w-full relative">
              <img
                src="/profile/gunung.png"
                className="mt-0 object-cover h-full rounded-lg"
              />
            </div>
            <div className="h-40 w-full relative mb-4">
              <img
                src={"/profile/kitab.png"}
                className="mt-0 object-cover h-full rounded-lg"
              />
            </div>
            <div className="h-80  w-full relative">
              <img
                src="/profile/talk.png"
                className="mt-0 object-cover h-full rounded-lg"
              />
            </div>
          </div>

          <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 text-justify">
            Hi, I'm Emje, a product designer from Indonesia. I graduated in
            Informatics Engineering, which laid the foundation for my skills in
            blending design, tech, human aspects, and business strategy. Over
            the past 7+ years, I've worked in diverse roles across software
            houses, AI companies, on-demand services, SaaS, B2B, and B2C.
          </p>
          <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 text-justify">
            I kicked off my career as a graphic designer in college and later
            transitioned to becoming a UI/UX Designer at
            <span className="not-prose inline-flex mx-2">
              <a
                href="https://sisi.id/"
                target="_blank"
                className="underline decoration-pink-500 font-semibold decoration-2"
              >
                SISI
              </a>
            </span>
            and
            <span className="not-prose inline-flex mx-2">
              <a
                href="https://www.dot.co.id/"
                target="_blank"
                className="underline decoration-orange-500 font-semibold decoration-2"
              >
                DOT Indonesia
              </a>
            </span>
            until 2019. After that, I joined
            <span className="not-prose inline-flex mx-2">
              <a
                href="http://kata.ai/"
                target="_blank"
                className="underline decoration-blue-400 font-semibold decoration-2"
              >
                Kata.ai
              </a>
            </span>
            , an AI and SaaS company, contributing to chatbot platform features,
            rebranding, and creating the Aksara Design System.
          </p>
          <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 text-justify">
            Currently, I'm a Product Designer at
            <span className="not-prose inline-flex mx-2">
              <a
                href="https://www.gojek.com/en-id/"
                target="_blank"
                className="underline decoration-green-600 font-semibold decoration-2"
              >
                Gojek
              </a>
            </span>
            , involved in evolving the Asphalt Design System, standardizing 18+
            products, and enabling designers to leverage our system. We've also
            built an in-house Figma plugin and a central hub for design system
            documentation, saving considerable time and costs annually.
          </p>
          <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 text-justify">
            Through my journey, I see design as a constant learning process,
            like a traveler exploring an unknown path. It's a bit like a
            challenging hike, where patience and resilience are key to reaching
            success.
          </p>
        </div>

      <div className="">
      <Button href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&dl=0">
          Download my resume <HiDownload />
        </Button>
      </div>
        A seasoned Product Designer with over 7 years of experience, specializing in creating robust user-centered designs and comprehensive design systems for businesses.
      </div> */}

      <section className="mx-0 sm:mx-10">
        <div className=" flex flex-col">
          <div className=" flex flex-col justify-center  gap-2 text-left">
            <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0">
              A Product Designer with 7+ years of experience, focused on creating user-centered designs and design systems for businesses.
            </h1>
            <div className="columns-2 sm:columns-3 gap-4 mt-6 z-20">
              <div className=" h-40 w-full relative hidden sm:block mb-4">
                <img
                  src="/profile/nike.png"
                  className=" mt-0 object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="h-80 w-full relative hidden sm:block">
                <img
                  src="/profile/kopi.png"
                  className="mt-0 object-cover h-full rounded-lg"
                />
              </div>
              <div className="h-80  w-full relative mb-4">
                <img
                  src="/profile/umay.png"
                  className=" mt-0 object-cover h-full rounded-lg"
                />
              </div>
              <div className="h-40  w-full relative">
                <img
                  src="/profile/code.jpg"
                  className="mt-0 object-cover h-full rounded-lg"
                />
              </div>
              <div className="h-40 w-full relative mb-4">
                <img
                  src={"/profile/uiux.jpg"}
                  className="mt-0 object-cover h-full rounded-lg"
                />
              </div>
              <div className="h-80  w-full relative">
                <img
                  src="/profile/talk.png"
                  className="mt-0 object-cover h-full rounded-lg"
                />
              </div>
            </div>

            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700  text-justify">
              Hi, I am Emje, a product designer from Indonesia. I graduated in
              Informatics Engineering, which laid the foundation for my skills in
              blending design, tech, human aspects, and business strategy. Over
              the past 7+ years, I have worked in diverse roles across software
              houses, AI companies, on-demand services, SaaS, B2B, and B2C.
            </p>
            <p className=" mt-6 text-base dark:text-zinc-300 text-zinc-700  text-justify">
              I kicked off my career as a graphic designer in college and later
              transitioned to becoming a UI/UX Designer at <a
                href="https://sisi.id/"
                target="_blank"
                className="underline decoration-pink-500 font-semibold decoration-2"
              >SISI
              </a> and <a
                href="https://www.dot.co.id/"
                target="_blank"
                className="underline decoration-orange-500 font-semibold decoration-2"
              >
                DOT Indonesia
              </a> until 2019. After that, I joined <a
                href="http://kata.ai/"
                target="_blank"
                className="underline decoration-blue-400 font-semibold decoration-2"
              >
                Kata.ai
              </a>, an AI and SaaS company, contributing to chatbot platform features,
              rebranding, and creating the Aksara Design System.
            </p>
            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700  text-justify">
              Currently, I am a Product Designer at <a
                href="https://www.gojek.com/en-id/"
                target="_blank"
                className="underline decoration-green-600 font-semibold decoration-2"
              >
                Gojek
              </a>, involved in evolving the Asphalt Design System, standardizing 18+
              products, and enabling designers to leverage our system. We have also
              built an in-house Figma plugin and a central hub for design system
              documentation, saving considerable time and costs annually.
            </p>
            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700  text-justify">
              Through my journey, I see design as a constant learning process,
              like a traveler exploring an unknown path. It is a bit like a
              challenging hike, where patience and resilience are key to reaching
              success.
            </p>
          </div>


        </div>
      </section>

      <section className="mx-0 sm:mx-10 mt-10">
        <div className="flex flex-col justify-center items-center">
          {/* <Button href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&dl=0">
          Download my resume <HiDownload />
        </Button> */}
          <Button asChild>
            <Link
              href="https://www.dropbox.com/scl/fi/u3ojh09hdqneidiwj0gr6/MJ-Arifin-Resume.pdf?rlkey=yp3zv4iuhruo5usygbdavi4wc&e=1&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline">
              Download my resume
              <HiDownload />

            </Link>
          </Button>

        </div>

      </section>


      <section className=" mx-0 sm:mx-10 mt-10">
        <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
          <h2 className=" md:w-12 flex text-lg font-semibold  text-zinc-600 dark:text-zinc-400 mr-12 mt-0">
            <span className=" ml-2">Work</span>
          </h2>

          <div className="flex flex-col gap-1 w-full mt-0">
            <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
              <span className=" ml-2">
                {" "}
                7+ years of professional experience in design
              </span>
            </h3>
            <ol className=" space-y-4 mt-0 pl-0">
              {experience.map((item, index) => (
                <li className="flex gap-4 " key={index}>
                  <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-12 w-12 rounded-full"
                      src={item.profile}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
                    <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">
                      {item.name}
                    </dd>
                    <div className="justify-between items-center w-full sm:flex">
                      <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">
                        {item.position}
                      </dd>
                      <dd
                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0"
                        aria-label="2019 until Present"
                      >
                        {item.date}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>



      <section className=" mx-0 sm:mx-10 mt-10">
        <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
          <h2 className=" md:w-12 flex text-lg font-semibold  text-zinc-600 dark:text-zinc-400 mr-12 mt-0">
            <span className=" ml-2">Community</span>
          </h2>

          <div className="flex flex-col gap-1 w-full mt-0">
            <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
              <span className=" ml-2">
                {" "}
                Engaged within the community.
              </span>
            </h3>
            <ol className=" space-y-4 mt-0 pl-0">
              {community.map((item, index) => (
                <li className="flex gap-4 " key={index}>
                  <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full">
                    <img
                      alt=""
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-12 w-12 rounded-full"
                      src={item.profile}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
                    <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">
                      {item.name}
                    </dd>
                    <div className="justify-between items-center w-full sm:flex">
                      <dd className="text-sm text-zinc-500 font-medium dark:text-zinc-400 pl-0 pt-0 mt-0">
                        {item.position}
                      </dd>
                      <dd
                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400 pl-0 pt-0 mt-0"
                        aria-label="2019 until Present"
                      >
                        {item.date}
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>


      <section className=" mx-0 sm:mx-10 mt-10">
        <div className="flex flex-col md:flex-row gap-1 md:gap-12 w-full">
          <h2 className=" md:w-12 flex text-lg font-semibold  text-zinc-600 dark:text-zinc-400 mr-12 mt-0">
            <span className=" ml-2">Contributions</span>
          </h2>

          <div className="flex flex-col gap-1 w-full mt-0">
            <h3 className="flex text-lg font-semibold  text-zinc-800 dark:text-zinc-300 mr-12 mt-0">
              <span className=" ml-2">


                Contributing and learning on my journey.
              </span>
            </h3>
            <ul className=" space-y-4 mt-0 pl-6">
              {contribution.map((item, index) => (
                <li className=" text-base" key={index}>
                  {item.object}
                  {/* <dl className="flex flex-auto flex-wrap gap-x-2 mt-0 mb-0">
                  <dd className="w-full flex-none text-base font-semibold text-zinc-800 dark:text-zinc-100 pl-0 pt-0 mt-0">
                    {item.object}
                  </dd>
            
                </dl> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



    </div>
  );
};

export default page;
