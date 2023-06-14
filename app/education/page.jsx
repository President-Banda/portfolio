import React from 'react';

const Education = () => {
  return (
    <>
    <div className="grid grid-cols-4 col-span-3 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">

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
    
    </div>

    
     
      
    </>
  )
}

export default Education