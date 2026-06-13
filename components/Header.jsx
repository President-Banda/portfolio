'use client'
import { useEffect, useState } from "react"
import { Moon } from "./_icons/moon"
import { Sun } from "./_icons/sun"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "./_icons/linkedin"
import { Githubk } from "./_icons/github"
import { Aws } from "./_icons/aws"

export default function Header() {
  const [darkMode, setDarkMode] = useState('')

  const switchMode = () => setDarkMode(prev => !prev)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (darkMode === '') {
      setDarkMode(localStorage.getItem('darkMode') === 'true')
    } else if (darkMode) {
      localStorage.setItem('darkMode', 'true')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('darkMode', 'false')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-sakura dark:bg-dark-color border-b border-sakura dark:border-gray-800">

      {/* Left: logo + name */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/animated.png"
          alt="Albert Banda"
          width={40}
          height={40}
          className="rounded-lg shadow-sm flex-shrink-0"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-extrabold font-[Dosis] text-base md:text-xl text-gray-900 dark:text-white">
            Albert <span className="text-red-700">Banda</span>
          </span>
          <span className="font-thin italic text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
            president
          </span>
        </div>
      </Link>

      {/* Right: social icons + dark mode */}
      <div className="flex items-center gap-1 md:gap-2">
        <Link href="https://www.credly.com/users/albert-banda/badges" target="_blank"
          className="p-1.5 rounded-lg hover:bg-sakura-light dark:hover:bg-gray-700 transition-colors">
          <Aws />
        </Link>
        <Link href="https://github.com/President-Banda" target="_blank"
          className="p-1.5 rounded-lg hover:bg-sakura-light dark:hover:bg-gray-700 transition-colors">
          <Githubk />
        </Link>
        <Link href="http://www.linkedin.com/in/albertbanda-tech" target="_blank"
          className="p-1.5 rounded-lg hover:bg-sakura-light dark:hover:bg-gray-700 transition-colors">
          <Linkedin />
        </Link>
        <button
          onClick={switchMode}
          aria-label="Toggle dark mode"
          className="p-1.5 rounded-lg hover:bg-sakura-light dark:hover:bg-gray-700 transition-colors ml-1"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  )
}
