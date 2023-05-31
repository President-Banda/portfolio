import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from '../../components/_icons/linkedin'
import { Githubk } from '../../components/_icons/github'
import { Twitter } from '../../components/_icons/twitter'
import { Mail } from '../../components/_icons/mail'
import { Tinder } from '../../components/_icons/tinder'


const LinkComponent = () => {
  return (
    <>
      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container">
                <p className="col-span-1 p-2 text-lg  h-full">
                    First and foremost, I am a tech enthusiast, I love technology, I love tweaking/customizing, creating, I love advancements 
                    in technology. I love when hardware makes small leaps and bounds, I love when software improves, from rugged, unusable
                    messes that were car infotainment systems to the smooth ones we have now. 
                    <br />
                    
                    I love technology across a large spectrum <span className="scale-125 text-black font-bold">
                    [linux, gaming, hardware, web applications, programming [ PHP, Laravel, Javascript, HTML, CSS, React, Next.js, Tailwind, MySQL ], 
                    android, ios, cloud, database, containerization, orchestration, automation, scripting, version control, A.I, Robotics, IoT]
                    </span>
                     so I am still learning and finding my footing, but I also mention technologies I frequently play around with!
                </p>
      </div>

      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container">
                <p className="col-span-1 p-2 text-lg  h-full">
                    I am a Linux System Administrator by heart, managing complex hosting infrastructure; I love and enjoy learning about Linux, the 
                    stress of system administration is much more bearable. I am growing, even as you read this. <br />
                    I am a web developer by need, I need money, mostly self taught but I have built some interesting projects over the years like this one,
                    some big, some small... But I am a pretty competent developer.
                </p>
      </div>

      <div className="text-justify text-lg m-2 border border-solid border-sakura-light rounded-lg p-1 leading-relaxed glassmorphic-container">
                <p className="col-span-1 p-2 text-lg h-full">
                    I am an AWS Cloud specialist by passion, we all need something to impress two out of five people in the room and my chosen
                    passion is Cloud technology, AWS cloud to be specific, a never ending learning journey I have come to love and specialize in.
                    <br />
                    I am a teacher by blood, both parents are teachers, my mother teaches nursery school kids, my father teaches primary school kids, 
                    not that they wanted me to be one but I do love what they do so much i just started teaching about... drum roll ... technology!
                </p>
      </div>
      <div className='text-center justify-center align-middle items-center flex'>
          <Image className="rounded-xl shadow-inner"
                        src={"/images/Integrations.png"}
                        alt="my_intro_image"
                        width={500}
                        height={500}
                        loading="lazy"

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
        </div>

      <div className="col-span-3 text-center m-2 
      border border-solid border-sakura-light rounded-lg p-2 leading-relaxed 
      bg-gradient-to-r from-sakura to-sakura-light h-fit dark:text-black">
        <h1 className='text-center text-4xl mb-10'>Connect with me via:</h1>

        <div className='text-center justify-center align-middle items-center flex'>
          <Image className="rounded-xl shadow-inner"
                        src={"/images/Networking.png"}
                        alt="my_intro_image"
                        width={200}
                        height={80}
                        loading="lazy"

                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
        </div>

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
              <Tinder className='mr-1 scale-150 animate-ping transition' />
              Tinder
            </Link>


        </div>

      </div>

    </>
  )
}

export default LinkComponent