'use client';
//import { 'Great Vibes' } from 'next/font/google'
import { useEffect, useState } from "react";
import { Moon } from "./_icons/moon";
import { Sun } from "./_icons/sun";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    const size = "24px";
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    const switchMode =() => {
        setDarkMode(!darkMode);
    }

    useEffect(()=>{
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
    }, [darkMode]);

    return(
        <div className="flex flex-row mt-5">
            
            <div className="flex basis-3/4 justify-center text-5xl font-light tracking-wide">
            <Link href='/' className="flex justify-center align-middle m-1">
                <Image className="rounded-xl shadow-inner"
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
                Albert Banda<span className="font-thin italic text-xl ml-5 ">president</span>
            </div>
            <div className="flex basis-1/4 transition cursor-pointer hover:text-blue-600 justify-end m-2 animate-bounce">
                {darkMode?<Sun onClick={switchMode} />:<Moon onClick={switchMode} />}
            </div>
        </div>    
        
    )
}