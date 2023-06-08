import Image from "next/image"

const Certification = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 col-start-2 col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:rotate-45 hover:origin-top "
              src={"/images/authorized-instructor.png"}
              alt="aai_badge"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <span className="text-lg font-bold">Amazon Authorised Instructor</span>
          <span className=" text-xs">17 May 2023</span>
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:rotate-45 hover:origin-top "
              src={"/images/solutions_architect.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <span className="text-lg font-bold">AWS Certified Solutions Architect Associate</span>
          <span className=" text-xs">07 May 2022</span>
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:rotate-45 hover:origin-top "
              src={"/images/udacity-logo.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <span className="text-lg font-bold">Udacity Cloud Developer NanoDegree</span>
          <span className=" text-xs">19 October 2022</span>
        </div>

        <div className="flex flex-col justify-center text-center mb-10">
          <Image className="transition duration-100 rounded-sm shadow-inner scale-90 origin-center hover:rotate-45 hover:origin-top "
              src={"/images/free_code_camp.png"}
              alt="my_projects_image"
              width={500}
              height={500}
              loading="lazy"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <span className="text-lg font-bold">FreeCodeCamp Front End Development Libraries</span>
          <span className=" text-xs">04 June 2023</span>
        </div>


      </div>
    </>
  )
}

export default Certification