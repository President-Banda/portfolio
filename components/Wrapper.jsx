'use client'
import { usePathname } from 'next/navigation'

const Wrapper = ({ children }) => {
  const pathname = usePathname()
  const isBlogPost = pathname.startsWith('/blog/posts/')

  return (
    <div className={
      isBlogPost
        ? 'grid grid-cols-[3rem_1fr] gap-2 m-2'
        : 'grid grid-cols-4 grid-rows-10 gap-2 m-2 overflow-hidden'
    }>
      {children}
    </div>
  )
}

export default Wrapper
