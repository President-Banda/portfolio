import Image from "next/image";
import { Certificates } from "./_icons/certificates";
import { Education } from "./_icons/education";
import { Hobbies } from "./_icons/hobbies";
import { Info } from "./_icons/info";
import { Links } from "./_icons/links";
import { Work } from "./_icons/work";
import { AlbertBandaIntro } from "./images/Intro_image";

export default function Intro(){
    return(
        <div className="grid grid-cols-4 gap-2 m-2 max-w-100% overflow-hidden">
            <div className="container mx-auto items-center divide-y divide-black">
                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Info className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">About Me</span>
                </button>

                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Work className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Work Experience</span>
                </button>

                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Education className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Education</span>
                </button>

                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Certificates className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Certifications</span>
                </button>

                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Hobbies className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Interests & Hobbies</span>
                </button>

                <button className="intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Links className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Links</span>
                </button>
 
            </div>


            <div className="col-span-2 text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan lorem placerat vulputate 
                lorem aliquet magna cubilia auctor non. Nisl etiam blandit euismod curabitur praesent lacus 
                eu iaculis purus. Eros volutpat molestie orci conubia pretium convallis nisl blandit sapien. 
                Amet metus risus vivamus varius euismod feugiat eu penatibus semper. Iaculis sem litora 
                condimentum amet per vehicula hendrerit massa platea. Nam et himenaeos varius nisi interdum 
                parturient mattis cum a. Cubilia eros vulputate luctus tellus condimentum aliquam ridiculus 
                penatibus sollicitudin. Magnis lectus interdum faucibus tempor facilisi mollis mauris velit 
                vestibulum. Leo turpis dui proin dui leo potenti consequat lorem tempor. Phasellus tincidunt 
                turpis dapibus sapien netus sit dapibus porttitor sagittis.
            </div>

            <div className="bg-sakura rounded-xl scale-90 row-span-1 h-auto">
                <div className="bg-sakura-light rounded-xl -rotate-6">
                    <Image className="transition duration-100 rounded-xl shadow-inner saturate-150 scale-90 origin-center -rotate-12 hover:rotate-45 hover:origin-top"
                        src={"/images/albert_banda_image.jpg"}
                        alt="my_intro_image"
                        width={500}
                        height={500}

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </div>
            </div>

        </div>
    )
}