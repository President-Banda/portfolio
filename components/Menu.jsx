'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Certificates } from './_icons/certificates'
import { Education } from './_icons/education'
import { Hobbies } from './_icons/hobbies'
import { Info } from './_icons/info'
import { Links } from './_icons/links'
import { Work } from './_icons/work'
import { Blog } from './_icons/blog'

const navItems = [
  { href: '/',              Icon: Info,         label: 'About'          },
  { href: '/work',          Icon: Work,         label: 'Work'           },
  { href: '/education',     Icon: Education,    label: 'Education'      },
  { href: '/certification', Icon: Certificates, label: 'Certs'          },
  { href: '/interests',     Icon: Hobbies,      label: 'Interests'      },
  { href: '/links',         Icon: Links,        label: 'Links'          },
  { href: '/blog',          Icon: Blog,         label: 'Blog'           },
]

const Menu = () => {
  const pathname = usePathname()
  const collapsed = pathname.startsWith('/blog/posts/')

  return (
    <>
      {/* ── Desktop sidebar ── */}
      {collapsed ? (
        /* Blog post: icon-only strip */
        <div className="hidden md:flex sticky top-4 flex-col items-center gap-1 pt-1">
          {navItems.map(({ href, Icon, label }) => (
            <Link
              key={href}
              href={href}
              title={label}
              className="relative group flex items-center justify-center w-10 h-10 rounded-xl
                         bg-sakura-light hover:bg-red-700 dark:bg-sakura dark:hover:bg-red-700
                         text-gray-800 hover:text-white dark:text-black dark:hover:text-white
                         transition-all duration-200 shadow-sm hover:scale-110"
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
      ) : (
        /* Normal pages: full sidebar with labels */
        <div className="hidden md:flex flex-col sticky top-0">
          {navItems.map(({ href, Icon, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 px-2 py-2 rounded-r-xl border-l-4 transition-all duration-150 font-[Dosis] font-semibold text-xs
                  ${active
                    ? 'border-red-700 bg-sakura text-gray-900 dark:bg-sakura dark:text-black'
                    : 'border-transparent hover:border-sakura hover:bg-sakura-light dark:hover:bg-sakura text-gray-700 dark:text-gray-300'
                  }`}
              >
                <span className="flex-shrink-0"><Icon /></span>
                <span className="truncate">
                  {label === 'About' ? 'About Me' : label}
                </span>
              </Link>
            )
          })}
        </div>
      )}

      {/* ── Mobile bottom tab bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50
                      bg-white dark:bg-dark-color border-t-2 border-sakura
                      px-1 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {navItems.map(({ href, Icon, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <motion.div
                key={href}
                whileTap={{ scale: 0.72 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                <Link
                  href={href}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl
                              transition-colors duration-150 min-w-0
                              ${active
                                ? 'text-red-700'
                                : 'text-gray-500 dark:text-gray-400 hover:text-red-700'
                              }`}
                >
                  <motion.span
                    animate={active ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  >
                    <Icon />
                  </motion.span>
                  <span className="text-[9px] font-[Dosis] font-bold leading-none truncate">
                    {label}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Menu
