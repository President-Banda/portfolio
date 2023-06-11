import Image from "next/image";
import { Info } from "../../components/_icons/info";
import Link from "next/link";

const Work = () => {
  return (
    <>
            <div className="col-start-2 col-span-2 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                 <span className=" text-lg flex-wrap">
                 <span className=" font-medium text-6xl flex-wrap mb-10 leading-snug font-[Dosis]">
                  Take a peek at my most <span className=" text-red-700">Recent</span> Projects
                 </span>
                  <p className="mt-20">
                  I am a developer with three years of work experience, specializing in Laravel, MySQL, 
                  React, Next.js, MySQL, and Linux. I have honed my skills in building robust web applications
                  using Laravels powerful framework and efficiently managing databases with MySQL. I am also 
                  proficient in frontend development, leveraging React and Next.js to create dynamic user interfaces.
                  With my solid understanding of Linux, I possess the expertise to deploy and maintain applications
                  in a Linux environment.
                   <br />
                  </p>
                  <br />

                 </span>
                
                
            </div>

            <div className="col-start-4 col-span-1">
            <div className="bg-sakura rounded-xl scale-90 bg-opacity-50">
                <div className="bg-sakura rounded-xl bg-opacity-50">
                    <Image className="transition duration-100 rounded-xl shadow-inner scale-90 origin-center hover:rotate-45 hover:origin-top "
                        src={"/images/albert_banda_image.jpg"}
                        alt="my_projects_image"
                        width={500}
                        height={500}
                        loading="lazy"

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </div>
            </div>
            </div>
            
            <div className="grid justify-center items-center col-start-2 col-span-4 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
              <span className="grid font-medium text-4xl justify-start">Projects</span>
              <hr class="border-t-4 border-red-700 my-5 w-10 h-10 ml-5"></hr>

              <article className="flex justify-center self-center text-center bg-white transition hover:shadow-xl w-2/3 mb-5 glassmorphic-container">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Jan 30</span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56 mt-14">
                  <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:scale-150 "
                      src={"/images/innovate.png"}
                      alt="innovate 265 interface"
                      width={1280}
                      height={720}
                      loading="lazy"

                      // sizes="(max-width: 768px) 100vw,
                      // (max-width: 1200px) 50vw,
                      // 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        UNDP INNOVATE 265
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-700 text-justify">
                    UNDP Innovate 265 is an Android app designed for gathering, storing, and overseeing grassroots-level 
                    innovation data. I initially focused on backend development, including APIs, databases, and AWS 
                    infrastructure, I later took the initiative to enhance it further by incorporating a web interface as
                    an additional feature, serving as the icing on the cake for UNDP.
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      href="https://chiweto.ch/undp"
                      target="_blank"
                      className="block bg-sakura-light px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-sakura hover:scale-110"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
            </article>


            <article className="flex justify-center self-center text-center bg-white transition hover:shadow-xl w-2/3 mb-5 glassmorphic-container">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2021</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>May 10</span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56 mt-14">
                  <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:scale-150 "
                      src={"/images/sms_platform.png"}
                      alt="sms platform interface"
                      width={500}
                      height={500}
                      loading="lazy"

                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        SMS Platform 2.0
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-6 text-sm/relaxed text-gray-700 text-justify">
                    SMS Platform represents a substantial upgrade to an SMS-based system dedicated to 
                    disseminating bulk messages and facilitating Q&A interactions via a user-friendly 
                    web interface. Developed in collaboration with Francis Ganya, this project employed a 
                    plethora of technologies too numerous to enumerate. Notably, it stands as the most extensive 
                    and intricate system I have had the opportunity to work on thus far.
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      href="https://chiweto.ch/"
                      target="_blank"
                      className="block bg-sakura-light px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-sakura hover:scale-110"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
            </article>


            <article className="flex justify-center self-center text-center bg-white transition hover:shadow-xl w-2/3 mb-5 glassmorphic-container">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Jun 10</span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56 mt-14">
                  <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:scale-150"
                      src={"/images/portfolio.png"}
                      alt="this portforlio interface"
                      width={500}
                      height={500}
                      loading="lazy"

                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between" id="this">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        This Portfolio
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-700 text-justify">
                    This Portfolio is a distinct showcase of my design techniques, featuring unconventional color choices. 
                    It embodies the concept of crafting an unparalleled creation, one that cannot be replicated elsewhere
                     online. Despite not being a front-end developer, I ventured into uncharted territory to experiment 
                     and push my boundaries.
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      href="#this"
                      className="block bg-sakura-light px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-sakura hover:scale-110"
                    >
                      Visit
                    </Link>
                  </div>
                </div>
            </article>


            </div>
    </>
  )
}

export default Work