'use client'
import { usePathname } from 'next/navigation'

const Wrapper = ({ children }) => {
  const pathname = usePathname()
  const isBlogPost = pathname.startsWith('/blog/posts/')

  return (
    <div className={[
      'grid grid-cols-4 gap-2 mx-2 mb-2',
      'pb-20 md:pb-0',           // room for mobile bottom nav
      isBlogPost
        ? 'md:grid-cols-[3rem_1fr]'
        : 'md:grid-cols-[8rem_1fr_1fr_1fr] md:grid-rows-10 md:overflow-hidden',
    ].join(' ')}>
      {children}
    </div>
  )
}

export default Wrapper
