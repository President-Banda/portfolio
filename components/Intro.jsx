import Image from "next/image";
import { Info } from "./_icons/info";



export default function Intro(){
    return(
        <>
            <div className="col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed border-b-0">
                 <span className="font-medium text-xl flex-wrap md:font-medium md:text-6xl md:flex-wrap">
                 Tech Enthusiast, System <span className=" text-red-700">Admin</span>, Web <span className=" text-red-700">Developer</span>, 
                 AWS Cloud Specialist, and <span className=" text-red-700">Trainer</span>
                 </span>
                <br />
                <hr className="border-t-4 border-gray-700 my-10 w-52 h-10 ml-5"></hr>
                
            </div>
            <div className="col-span-4 col-start-2 md:col-start-2 md:text-justify md:m-2 md:border md:border-solid md:border-sakura-light md:rounded-lg md:leading-relaxed md:p-4 md:-mt-20 md:font-['Roboto'] md:col-span-2 ">
                 <span className=" text-lg flex-wrap">
                  <p>
                    I am a tech enthusiast with a passion for learning and teaching about technology. I have a
                   wide range of skills and experience in the tech industry, including Linux system administration, 
                   web development, and AWS cloud computing. I am also a certified teacher and enjoy sharing my knowledge 
                   of technology with others.
                   <br />
                   <br />

                    I am a highly motivated and results-oriented individual with a strong work ethic. I am always willing 
                    to go the extra mile and I am always looking for new challenges. I am confident that I can make a significant 
                    contribution to any team or organization.
                    <br />
                    <br />

                    I am looking for a position where I can use my skills and experience to make a positive impact on the world. 
                    I am excited about the future of technology and I am eager to be a part of it.

                    
                  </p>
                  <br />


                    <div className=" w-48 grid -ml-7 h-16">
                        <button className="cv-button flex md:w-full skew-y-0 ">
                            <div className="hidden items-center justify-center">
                                <Info className="m-1" />
                            </div>
                            <span className="hidden text-2xl font-light md:flex text-center items-center justify-center flex-grow">
                                Curriculum Vitae
                            </span>
                            <span className="flex text-center items-center justify-center self-center flex-grow md:hidden">CV</span>
                        </button>
                    </div>
                 </span>
                
                
            </div>

            <div className="hidden col-start-4 col-span-1 md:inline -mt-48">
            <div className="bg-sakura rounded-xl scale-90 bg-opacity-50">
                <div className="bg-sakura-light rounded-xl -rotate-6 bg-opacity-50">
                    <Image className="transition duration-100 rounded-xl shadow-inner scale-90 origin-center -rotate-12 hover:rotate-45 hover:origin-top "
                        src={"/images/albert_gown.jpg"}
                        alt="my_intro_image"
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

            <div className="grid grid-cols-4 col-start-2 col-span-2 text-center text-2xl">
                <span className="font-thin">
                    My Core Values
                </span>
            </div>

            <div className="flex flex-col mb-5 md:grid grid-cols-5 col-start-2 col-span-2 h-24 text-center text-2xl font-medium">
                

                <div className="grid m-1 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                    <span className="quote text-center items-center self-center">
                        <span className="text-red-700">‘</span>
                        Respect
                        <span className="text-red-700">’</span>
                    </span>
                </div>

                <div className="grid text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                    <span className="quote text-center items-center self-center">
                        <span className="text-red-700">‘</span>
                            Integrity
                        <span className="text-red-700">’</span>
                    </span>
                </div>

                <div className="grid text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                    <span className="quote text-center items-center self-center">
                        <span className="text-red-700">‘</span>
                            Humour
                        <span className="text-red-700">’</span>
                    </span>
                </div>
            </div>

            

        </>
    )
}