import Link from 'next/link'
import React from 'react'

const header = (
    <header>
        <div>
            <Link href="/blog">
            <h1>
                Albert Bandas blog
            </h1>
            </Link>
            <h1>
                Welcome to the Presidents blog
            </h1>
        </div>
    </header>
)

const footer = (
    <footer>
        <div>
            <p>
                Developed by Albert Banda
            </p>
        </div>
    </footer>
)

const BlogLayout = ({ children }) => {

    
  return (
    <div>
        { header }
        { children }
        { footer }
    </div>
  )
}

export default BlogLayout