import { Certificates } from "./_icons/certificates";
import { Education } from "./_icons/education";
import { Hobbies } from "./_icons/hobbies";
import { Info } from "./_icons/info";
import { Links } from "./_icons/links";
import { Work } from "./_icons/work";
import { Blog } from "./_icons/blog"
import { AlbertBandaIntro } from "./images/Intro_image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="sticky container mx-auto items-center divide-y divide-black">
                <Link href='/' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Info className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">About Me</span>
                </Link>

                <Link href='work' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Work className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Projects</span>
                </Link>

                <Link href='education' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Education className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Education / Experience</span>
                </Link>

                <Link href='certification' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Certificates className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Certifications</span>
                </Link>

                <Link href='interests' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Hobbies className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Interests & Hobbies</span>
                </Link>

                <Link href='links' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Links className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Links</span>
                </Link>

                <Link href='blog' className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full">
                    <div className="flex items-center justify-center">
                        <Blog className="m-1" />
                    </div>
                    <span className="hidden md:flex text-center items-center justify-center flex-grow">Blog</span>
                </Link>
 
            </div>
  )
}

export default Menu