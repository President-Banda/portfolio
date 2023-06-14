'use client'
import { useState } from "react"
import Image from "next/image"// Import your CSS module
import styles from './styles.css'


const Certification = () => {

  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {setOverlayVisible(!overlayVisible)};
    

  return (
    <>
      <div className="md:grid md:grid-cols-2 gap-1 col-start-2 col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="rounded-sm shadow-inner "
              src={"/images/authorized-instructor.png"}
              alt="aai_badge"
              width={500}
              height={500}
              loading="lazy"
              onClick={toggleOverlay}

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          {overlayVisible && (
        <div className={styles.overlay} onClick={toggleOverlay}>
          <Image  
            src={"/images/solutions_architect.png"}
            alt="my_projects_image"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
      )}
          <div className="hidden md:inline">
            <span className="text-lg font-bold self-start ml-14">Amazon Authorised Instructor</span>
            <span className=" text-xs italic self-start ml-14">17 May 2023</span>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="rounded-sm shadow-inner  "
              src={"/images/solutions_architect.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="hidden md:inline">
            <span className="text-lg font-bold self-start ml-14">AWS Certified Solutions Architect Associate</span>
            <span className=" text-xs italic self-start ml-14">07 May 2022</span>
          </div>
          
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="rounded-sm shadow-inner scale-90"
              src={"/images/udacity-logo.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="hidden md:inline">
            <span className="text-lg font-bold self-start ml-6">Udacity Cloud Developer NanoDegree</span>
            <span className=" text-xs italic self-start ml-6">19 October 2022</span>
          </div>
          
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="rounded-sm shadow-inner scale-90"
              src={"/images/free_code_camp.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <div className="hidden md:inline">
            <span className="text-lg font-bold self-start ml-6">FreeCodeCamp Front End Development Libraries</span>
            <span className=" text-xs italic self-start ml-6">04 June 2023</span>
          </div>
          
        </div>


      </div>
    </>
  )
}

export default Certification