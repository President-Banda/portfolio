'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Certificates } from './_icons/certificates'
import { Education } from './_icons/education'
import { Hobbies } from './_icons/hobbies'
import { Info } from './_icons/info'
import { Links } from './_icons/links'
import { Work } from './_icons/work'
import { Blog } from './_icons/blog'

const navItems = [
  { href: '/',              Icon: Info,         label: 'About Me'               },
  { href: '/work',          Icon: Work,         label: 'Projects'               },
  { href: '/education',     Icon: Education,    label: 'Education / Experience' },
  { href: '/certification', Icon: Certificates, label: 'Certifications'         },
  { href: '/interests',     Icon: Hobbies,      label: 'Interests & Hobbies'    },
  { href: '/links',         Icon: Links,        label: 'Links'                  },
  { href: '/blog',          Icon: Blog,         label: 'Blog'                   },
]

const Menu = () => {
  const pathname = usePathname()
  const collapsed = pathname.startsWith('/blog/posts/')

  if (collapsed) {
    return (
      <div className="sticky top-4 flex flex-col items-center gap-1 pt-1">
        {navItems.map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            title={label}
            className="relative group flex items-center justify-center w-10 h-10 rounded-xl
                       bg-sakura-light hover:bg-red-700 dark:bg-sakura dark:hover:bg-red-700
                       text-gray-800 hover:text-white dark:text-black dark:hover:text-white
                       transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110"
          >
            <Icon />
            <span className="pointer-events-none absolute left-full ml-2 hidden group-hover:block
                             text-xs bg-gray-900 dark:bg-gray-700 text-white px-2 py-1 rounded-lg
                             whitespace-nowrap z-50 font-[Dosis] shadow-lg">
              {label}
            </span>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="sticky container mx-auto items-center divide-y divide-black">
      {navItems.map(({ href, Icon, label }) => (
        <Link
          key={href}
          href={href}
          className="intro-button p-1 m-1 md:intro-button flex w-10 md:w-full"
        >
          <div className="flex items-center justify-center">
            <Icon className="m-1" />
          </div>
          <span className="hidden md:flex text-center items-center justify-center flex-grow">
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Menu
