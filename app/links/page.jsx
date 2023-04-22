import Link from 'next/link'
import React from 'react'

const LinkComponent = () => {
  return (
    <>
      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
        LinkComponent 1
      </div>

      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
        Link Element 2
      </div>

      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed">
        Link Element 3
      </div>

      <div className="col-span-4 text-justify text-center m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed bg-gradient-to-r from-sakura to-sakura-light h-60">
        <h1 className='text-center text-4xl'>Connect with me via:</h1>
        <Link href='http://www.linkedin.com/in/albert-banda-tech' target='blank'>
          LinkedIn
        </Link>
      </div>

    </>
  )
}

export default LinkComponent