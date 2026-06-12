import Image from "next/image";
import { Info } from "./_icons/info";



export default function Intro(){
    return(
        <>
            <div className="col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed border-b-0">
                 <span className="font-medium text-xl flex-wrap md:font-medium md:text-5xl md:flex-wrap">
                 System <span className="text-red-700">Admin</span>, Backend <span className="text-red-700">Engineer</span>,
                 AWS <span className="text-red-700">Specialist</span> &amp; Champion <span className="text-red-700">Instructor</span>
                 </span>
                <br />
                <hr className="border-t-4 border-gray-700 my-10 w-52 h-10 ml-5"></hr>
                
            </div>
            <div className="col-span-4 col-start-2 text-justify p-1 leading-tight md:col-start-2 md:text-justify md:m-2 md:border md:border-solid md:border-sakura-light md:rounded-lg md:leading-relaxed md:p-4 md:-mt-20 md:font-['Roboto'] md:col-span-2">
                 <span className=" text-lg flex-wrap">
                  <p>
                    A technology researcher and practitioner with expertise in Linux system administration,
                    AWS cloud technologies, web development, backend engineering, and system deployment.
                    Highly skilled in managing and maintaining complex systems across both Linux and Windows
                    environments — ensuring stability, security, and performance.
                   <br />
                   <br />

                    Champion AWS Authorized Instructor delivering training across in-person, virtual, and
                    self-paced formats. Holder of 14+ industry certifications including AWS Solutions Architect
                    Professional, Machine Learning Specialty, KCNA, and more. Passionate about translating
                    complex technical concepts into clear, accessible knowledge for teams and organizations.
                    <br />
                    <br />

                    Currently based in Lilongwe, Malawi — working on cloud infrastructure, backend systems,
                    and training programs that drive real-world impact across Africa and beyond.
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

            <div className="grid grid-cols-4 col-start-2 col-span-2 text-center md:text-2xl">
                <span className="font-thin">
                    My Core Values
                </span>
            </div>

            <div className="flex flex-col-reverse m-1 lg:grid grid-cols-5 col-start-2 col-span-2 text-center text-2xl font-medium md:h-24">
                

                <div className="grid m-1 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                    <span className="quote text-center items-center self-center">
                        <span className="text-red-700">‘</span>
                        Respect
                        <span className="text-red-700">’</span>
                    </span>
                </div>


                <div className="grid m-1 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
                    <span className="quote text-center items-center self-center">
                        <span className="text-red-700">‘</span>
                            Integrity
                        <span className="text-red-700">’</span>
                    </span>
                </div>

                <div className="grid m-1 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto']">
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