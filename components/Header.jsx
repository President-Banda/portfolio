'use client';
//import { 'Great Vibes' } from 'next/font/google'
import { useEffect, useState } from "react";
import { Moon } from "./_icons/moon";
import { Sun } from "./_icons/sun";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "./_icons/linkedin";
import { Githubk } from "./_icons/github";
import { Aws } from "./_icons/aws";

export default function Header(){
    const size = "24px";
    const [darkMode, setDarkMode] = useState('');

    const switchMode =() => {
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            if(darkMode){
            localStorage.setItem("darkMode", "true");
            window.document.documentElement.classList.add('dark');

        }

        else if( darkMode == false ){
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove('dark');
        }

        else{
            setDarkMode(localStorage.getItem('darkMode') === "true");
        }
        }
    }, [darkMode]);

    return(
        <div className="flex flex-row pt-5 bg-sakura">
            
            <div className="flex basis-3/4 justify-start text-5xl font-light tracking-wide ml-10 font-[Merriweather]">
            <Link href='/' className="flex justify-center align-middle m-1">
                <Image className="scale-50 md:flex rounded-xl shadow-inner md:scale-100"
                        src={"/images/animated.png"}
                        alt="my_intro_image"
                        width={60}
                        height={50}
                        loading="lazy"

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
            </Link>
                <span className=" text-red-700 align-top self-center">A</span>
                <span className="hidden md:inline align-top self-center">lbert Banda</span>
                <span className="hidden md:inline font-thin italic text-xl ml-2 dark:text-white">president</span>
            </div>

            {/* <div className="flex basis-3/4 justify-end font-light tracking-wide -ml-40">
                <Link href="https://www.credly.com/users/albert-banda/badges"><Aws className='m-5 scale-150' /></Link>
                <Link href='http://www.linkedin.com/in/albertbanda-tech' target='blank'><Githubk className='m-5 scale-150' /></Link>
                <Link href='https://github.com/President-Banda' target='blank'><Linkedin className='m-5 scale-150' /></Link>
            </div> */}

            <div className="flex basis-1/4  cursor-pointer hover:text-blue-600 justify-end mr-10 mt-3">
            <Link href="https://www.credly.com/users/albert-banda/badges"><Aws className='m-5 scale-150' /></Link>
                <Link href='https://github.com/President-Banda' target='blank'><Githubk className='m-5 scale-150' /></Link>
                <Link href='http://www.linkedin.com/in/albertbanda-tech' target='blank'><Linkedin className='m-5 scale-150' /></Link>
                <div className="transition animate-bounce m-5 scale-150">
                {darkMode?<Sun onClick={switchMode} />:<Moon onClick={switchMode} />}
                </div>
                
            </div>
        </div>    
        
    )
}