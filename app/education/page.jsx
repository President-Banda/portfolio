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
      <time className="font-mono italic">Jan 2024</time>
      <div className="text-lg font-black">Freelance AAI, Discoverer International</div>
      Delivery of Amazon Authorised courses on behalf of AWS via Discoverer International
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
      <time className="font-mono italic">May 2022</time>
      <div className="text-lg font-black">AWS Trainer, Azubi Africa (GIBT)</div>
      Provide training on various topics all across Africa and beyond, with a 
      specific focus on Cloud and DevOps technologies including AWS Cloud, Linux, 
      Python, Terraform, Docker, Git and GitHub.
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
      <time className="font-mono italic">Apr 2022</time>
      <div className="text-lg font-black">AgriBizHub Website, LUANAR AgriBizHub</div>
      Redesign of the LUANAR AgriBizHub website to TACE website.
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
      <time className="font-mono italic">Dec 2021</time>
      <div className="text-lg font-black">UNDP Innovate 265 (UNIPOD App), UNDP </div>
      Development of the Backend database, application logic 
      and API logic for the mobile innovation collection app. Set
      up hosting infrastructure according to technical requirements
      and cost in mind while maintaining scalability, relaiability
      and high availability.
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
      <time className="font-mono italic">Dec 2020</time>
      <div className="text-lg font-black">ICT Consultant, Saidi Consulting Engineering</div>
      Ad hoc requests to provide troubleshooting, maintenace, installation and upgrade
      of IT devices either software or hardware based as well as network maintenance. 
      Perform any other requested services to support day-to-day business operations
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
      <time className="font-mono italic">Oct 2020</time>
      <div className="text-lg font-black">System Administrator / Web Developer, EIH Chiweto</div>
      Responsible for hosting and development of in-house systems and third party systems
      through consultancy. In charge of VPS, CPanel based, Backend and Shared hosting 
      environments. Managament of overall AWS environment. 
    </div>
    <hr />
  </li>

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
      <div className="text-lg font-black">BSc Information Technology, University of Malawi - The Polytechnic</div>
        Awarded a degree with credit / upper second-class equivalent. Project focus was
         the Development of a software monitoring tool for the campus network with a
         focus on the ICT directorate
    </div>
    <hr />
  </li>
  
</ul>
</div>
    
     
      
    </>
  )
}

export default Education