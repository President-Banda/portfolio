import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const header = (
    <header className='grid bg-sakura-light rounded-lg'>
        <div className='flex items-center'>
            <Image className='' src="/animated.png" width={100} height={100} alt='logo' />
            <div className='ml-4 items-center justify-center'>
          <Link href="/blog">
            <h1 className='text-lg font-bold dark:text-slate-950'>
              My Personal blog
            </h1>
          </Link>
          <h1 className='text-sm dark:text-slate-950'>
            A mixture of thought and experiences...
          </h1>
        </div>
            {/* <Link href="/blog">
            <h1 className=''>
                My Personal blog
            </h1>
            </Link>
            <h1 className=''>
                A mixture of thought and experiences...
            </h1> */}
        </div>
    </header>
)

const footer = (
    <footer className='grid border-t border-sakura justify-center items-center rounded-lg'>
        <div>
            <p>
                Developed  and Written by Albert Banda
            </p>
        </div>
    </footer>
)

const BlogLayout = ({ children }) => {

    
  return (
    <div className='grid col-span-3'>
        { header }
        { children }
        { footer }
    </div>
  )
}

export default BlogLayout