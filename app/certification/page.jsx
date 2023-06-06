import Image from "next/image"

const Certification = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 col-start-2 col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
        <div>
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

        <div>
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
    </>
  )
}

export default Certification