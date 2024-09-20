import React from 'react';

const Education = () => {
  return (
    <>
    {/* <div className="grid grid-cols-4 col-span-3 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">

        <div className="grid grid-cols-1 grid-rows-6 col-start-1 text-lg border border-solid border-sakura-light 
        rounded-lg p-1 leading-relaxed glassmorphic-container w-0 row-span-6">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 justify-end text-end row-span-6">                   
                <div className='row-start-4'>
                    <li className="mt-10 mb-32 ml-3 md:mt-20 md:mb-60 md:ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-sakura rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-red-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <time time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white"> 
                            2023
                        </time>
                    </li>
                </div>

                <div className='row-start-4'>
                    <li className="mb-32 ml-3 md:mb-60 md:ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-sakura rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-red-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <time time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white"> 
                            2022
                        </time>
                    </li>
                </div>

                <div className='row-start-4'>
                    <li className="mb-32 ml-3 md:mb-60 md:ml-6">
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-sakura rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-red-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <time time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white"> 
                            2021
                        </time>
                    </li>
                </div>

                <div className='row-start-3'>
                    <li className="ml-3 md:ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-sakura rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg aria-hidden="true" class="w-3 h-3 text-red-700 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">
                            2020
                        </time>
                    </li>
                </div>
            </ol>
        </div>

        <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container h-fit">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-5 h-fit">      

                <li class="m-0 p-0 md:mb-10">            
                    <h3 className="text-xs flex items-center mb-1 font-semibold text-gray-900 dark:text-white md:text-lg">
                        AWS Trainer 
                    </h3>
                    <time className="hidden md:block mb-2 text-sm font-normal leading-relaxed text-gray-400 dark:text-white">
                        GIBT
                    </time>
                    <p className="hidden md:inline mb-4 text-base font-normal text-gray-500 dark:text-white text-justify">
                        AWS Trainer for German Institute of business and Technology focusing on AWS
                        certifications (CCP, CSAA) and training including subtopics such as Linux, Database
                        Automation and Programming etc.
                    </p>
                </li>

            </ol>

        </div>

        <div className="col-start-2 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container h-fit">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-5 h-fit"> 
                <li class="m-0 p-0 md:mb-10">            
                    <h3 className="text-xs flex items-center mb-1 font-semibold text-gray-900 dark:text-white md:text-lg">
                        ICT Consultant 
                    </h3>
                    <time className="hidden md:block mb-2 text-sm font-normal leading-relaxed text-gray-400 dark:text-white">
                        Saidi
                    </time>
                    <p className="hidden md:inline mb-4 text-base font-normal text-gray-500 dark:text-white text-justify">
                        Saidi Consulting engineering ICT consultant on an Ad-Hoc basis for installation, maintenance and 
                        management of hardware, software and network infrastructure.
                    </p>
                </li>
            </ol>
        </div> 

        <div className="col-start-2 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container h-fit">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-5 h-fit">
                <li class="m-0 p-0 md:mb-10">            
                    <h3 className="text-xs flex items-center mb-1 font-semibold text-gray-900 dark:text-white md:text-lg">
                        System Admin/ Web Developer 
                    </h3>
                    <time className="hidden md:block mb-2 text-sm font-normal leading-relaxed text-gray-400 dark:text-white">
                        Chiweto
                    </time>
                    <p className="hidden md:inline mb-4 text-base font-normal text-gray-500 dark:text-white text-justify">
                        AWS Trainer for German Institute of business and Technology focusing on AWS
                        certifications (CCP, CSAA) and training including subtopics such as Linux, Database
                        Automation and Programming etc.
                    </p>
                </li>
            </ol>
        </div> 

        <div className=" row-start-3 col-start-3 mt-32 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container h-fit">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-5">      

                <li class="m-0 p-0 md:mb-10 md:ml-6">            
                    <h3 className="text-xs flex items-center mb-1 font-semibold text-gray-900 dark:text-white md:text-lg">
                        BSc. Information Technology
                    </h3>
                    <time className="hidden md:block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">
                        UNIMA
                    </time>
                    <p className="hidden md:inline mb-4 text-base font-normal text-gray-500 dark:text-white">
                        Bachelors Degree in Information Technology obtained with second upper class
                    </p>
                </li>
                
            </ol>

        </div>

        <div className="col-start-4 row-start-2 -mt-28 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container h-fit">
            <ol className="relative border-l border-gray-200 dark:border-gray-700 p-5">      

                <li class="m-0 p-0 md:mb-10 md:ml-2">            
                    <h3 className="text-xs flex items-center mb-1 font-semibold text-gray-900 dark:text-white md:text-lg">
                        SQL Basic 
                    </h3>
                    <time className="hidden md:block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">
                        HackerRank
                    </time>
                    <p className="hidden md:inline mb-4 text-base font-normal text-gray-500 dark:text-white">
                        Attempted and passed the SQL basic challange on HackerRank.
                    </p>
                </li>
                
            </ol>

        </div>  
    
    </div> */}

<div className="grid grid-cols-4 col-span-3 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-snug">
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical col-span-4 m-5">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">April 2020</time>
      <div className="text-lg font-black">First Macintosh computer</div>
      The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
      personal computer. It played a pivotal role in establishing desktop publishing as a general
      office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed
      in a beige case with integrated carrying handle; it came with a keyboard and single-button
      mouse.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">1998</time>
      <div className="text-lg font-black">iMac</div>
      iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
      been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
      and has evolved through seven distinct forms
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2001</time>
      <div className="text-lg font-black">iPod</div>
      The iPod is a discontinued series of portable media players and multi-purpose mobile devices
      designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
      8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
      million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
      over 20 years, the iPod brand is the oldest to be discontinued by Apple
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2007</time>
      <div className="text-lg font-black">iPhone</div>
      iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
      operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
      January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
      of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
      accounts for 15.6% of global smartphone market share
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2015</time>
      <div className="text-lg font-black">Apple Watch</div>
      The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
      tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
      iOS and other Apple products and services
    </div>
  </li>
</ul>
</div>
    
     
      
    </>
  )
}

export default Education