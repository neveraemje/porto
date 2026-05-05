import React from "react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Image from "next/image";



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


      <section className="mx-0 sm:mx-10">
        <div className=" flex flex-col">
          <div className=" flex flex-col justify-center  gap-2 text-left">
            <h1 className=" font-semibold bg-gradient-to-b from-zinc-700 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent text-3xl lg:text-3xl mb-0 tracking-tight">
              Product Designer with 9+ years of experience, leading and scaling user-centered design systems for businesses.
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
                  src="/profile/v60.png"
                  className="mt-0 object-fill w-full h-full rounded-lg"
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
              {/* <div className="h-80 w-full relative">
                <video
                  src="/profile/sepeda.mp4"
                  className="mt-0 object-cover h-full rounded-lg"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
            </div> */}
              <div className="h-80 w-full relative hidden sm:block">
                <video
                  src="/profile/sepeda.mp4"
                  className="mt-0 w-full h-full object-fill rounded-lg"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              </div>
            </div>

            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 tracking-tight leading-relaxed">
              Hi, I am Emje, a Product Designer from Indonesia with a background in Informatics Engineering, bridging design, tech, and business.
            </p>
            <p className=" mt-6 text-base dark:text-zinc-300 text-zinc-700 tracking-tight leading-relaxed">
              I started as a graphic designer in college, then transitioned into UI/UX at <a
                href="https://sisi.id/"
                target="_blank"
                className="no-underline  font-semibold text-sky-500"
              >SISI
              </a> and <a
                href="https://www.dot.co.id/"
                target="_blank"
                className="text-green-600 font-semibold no-underline"
              >
                DOT Indonesia
              </a> until 2019. I later joined <a
                href="http://kata.ai/"
                target="_blank"
                className="no-underline  font-semibold text-blue-500"
              >
                Kata.ai
              </a>, an AI SaaS company, where I contributed to chatbot platform features, led rebranding efforts, and helped establish the Aksara Design System.
            </p>
            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 tracking-tight leading-relaxed">
              Currently, I’m at <a
                href="https://www.gojek.com/en-id/"
                target="_blank"
                className="no-underline  font-semibold text-green-600"
              >
                Gojek
              </a>, leading the evolution of the Asphalt Design System—scaling it across 20+ teams and 5+ products, with 62 components and 77K+ weekly insertions. I drive adoption by aligning cross-functional teams, shaping system strategy, and balancing consistency with product needs.
            </p>
            <p className="mt-6 text-base dark:text-zinc-300 text-zinc-700 tracking-tight leading-relaxed">
              I see design as a continuous journey—like exploring an unknown path, where patience, resilience, and thoughtful decisions shape the outcome.
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
                9+ years of professional experience in design
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
