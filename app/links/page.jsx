import Link from 'next/link'
import React from 'react'
import { Linkedin } from '../../components/_icons/linkedin'
import { Githubk } from '../../components/_icons/github'
import { Twitter } from '../../components/_icons/twitter'
import { Mail } from '../../components/_icons/mail'
import { Tinder } from '../../components/_icons/tinder'


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
        <h1 className='text-center text-4xl mb-10'>Connect with me via:</h1>
        <div className='text-center'>
            <Link href='http://www.linkedin.com/in/albertbanda-tech' target='blank'
            className='font-semibold border border-solid  border-black rounded-md 
            m-1 p-4 h-10 w-28 inline-flex text-lg 
            text-center justify-center align-middle items-center 
            hover:scale-150 transition'
            >
              <Linkedin className='mr-1 scale-150' />
              LinkedIn
            </Link>

            <Link href='https://github.com/President-Banda' target='blank'
            className='font-semibold border border-solid  border-black rounded-md 
            m-1 p-4 h-10 w-28 inline-flex text-lg 
            text-center justify-center align-middle items-center
            hover:scale-150 transition'
            >
              <Githubk className='mr-1 scale-150' />
              GitHub
            </Link>

            <Link href='https://twitter.com/president_banda' target='blank'
            className='font-semibold border border-solid border-black rounded-md 
            m-1 p-4 h-10 w-28 inline-flex text-lg 
            text-center justify-center align-middle items-center
            hover:scale-150 transition'
            >
              <Twitter className='mr-1 scale-150' />
              Twitter
            </Link>

            <Link href='#' target='blank'
            className='font-semibold border border-solid  border-black rounded-md
            m-1 p-4 h-10 w-28 inline-flex text-lg 
            text-center justify-center align-middle items-center
            hover:scale-150 transition'
            > 
              <Mail className='mr-1 scale-150' />
              Mail
            </Link>

            <Link href='http://www.linkedin.com/in/albertbanda-tech' target='blank'
            className='transition font-semibold border border-solid  border-black rounded-md
             m-1 p-4 h-10 w-28 inline-flex text-lg 
             text-center justify-center align-middle items-center 
             animate-pulse hover:scale-150 transition'
            >
              <Tinder className='mr-1 scale-150 animate-ping' />
              Tinder
            </Link>


        </div>
      </div>

    </>
  )
}

export default LinkComponent