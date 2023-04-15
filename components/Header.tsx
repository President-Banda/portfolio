'use client';
import { useEffect, useState } from "react";
import { Moon } from "./_icons/moon";
import { Sun } from "./_icons/sun";

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
        <header className="flex items-center justify-end w-full p-4">
            <div className="transition cursor-pointer hover:text-blue-600 ">
                {darkMode?<Sun onClick={switchMode} />:<Moon onClick={switchMode} />}
            </div>
        </header>
    )
}