'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react'
import { Linkedin } from '../../components/_icons/linkedin'
import { Githubk } from '../../components/_icons/github'
import { Twitter } from '../../components/_icons/twitter'
import { Mail } from '../../components/_icons/mail'
import { Tinder } from '../../components/_icons/tinder'

const socials = [
  {
    name: "LinkedIn",
    handle: "albertbanda-tech",
    url: "http://www.linkedin.com/in/albertbanda-tech",
    description: "Professional profile — work history, certifications, and recommendations.",
    icon: <Linkedin />,
    color: "from-blue-500 to-blue-700",
    hoverBorder: "hover:border-blue-400",
    badge: "Professional",
  },
  {
    name: "GitHub",
    handle: "President-Banda",
    url: "https://github.com/President-Banda",
    description: "Code repositories — projects, experiments, and open-source contributions.",
    icon: <Githubk />,
    color: "from-gray-700 to-gray-900",
    hoverBorder: "hover:border-gray-500",
    badge: "Code",
  },
  {
    name: "Twitter / X",
    handle: "@president_banda",
    url: "https://twitter.com/president_banda",
    description: "Tech opinions, cloud snippets, and the occasional hot take.",
    icon: <Twitter />,
    color: "from-sky-400 to-sky-600",
    hoverBorder: "hover:border-sky-400",
    badge: "Social",
  },
  {
    name: "Email",
    handle: "woof-prevail-grub@duck.com",
    url: "mailto:woof-prevail-grub@duck.com",
    description: "Best for project enquiries, collaborations, and consulting opportunities.",
    icon: <Mail />,
    color: "from-red-500 to-rose-600",
    hoverBorder: "hover:border-red-400",
    badge: "Contact",
  },
  {
    name: "Credly",
    handle: "albert-banda",
    url: "https://www.credly.com/users/albert-banda/badges",
    description: "All 14+ verified digital badges — AWS, Kubernetes, and more.",
    icon: <span className="text-xl">🏅</span>,
    color: "from-amber-400 to-orange-500",
    hoverBorder: "hover:border-amber-400",
    badge: "Certifications",
  },
]

const TinderButton = () => {
  const controls   = useAnimationControls()
  const [swiped, setSwiped] = useState(false)
  const [msg, setMsg]       = useState('')

  const messages = [
    "Error 404: Match not found 💔",
    "Swiped right on too many AWS services 😅",
    "Currently in a committed relationship with Linux 🐧",
    "My type: someone who knows what a VPC is 😏",
    "Loading match... please wait ∞",
  ]

  const handleClick = async () => {
    if (swiped) return
    setSwiped(true)
    setMsg(messages[Math.floor(Math.random() * messages.length)])

    // Dramatic swipe-right animation
    await controls.start({
      x: [0, -15, 20, -20, 25, -10, 0],
      rotate: [0, -10, 12, -12, 14, -6, 0],
      scale: [1, 1.05, 1.08, 1.05, 1.1, 1.03, 1],
      transition: { duration: 0.7, ease: 'easeInOut' },
    })

    setTimeout(() => { setSwiped(false); setMsg('') }, 3500)
  }

  return (
    <div className="glassmorphic-container rounded-2xl border border-sakura-light overflow-hidden">
      <div className="flex items-stretch">
        {/* Pink/red stripe */}
        <div className="bg-gradient-to-b from-pink-500 to-red-600 w-1.5 flex-shrink-0 rounded-l-2xl" />

        <div className="flex items-center gap-4 p-4 flex-1">
          {/* Icon */}
          <motion.div
            animate={controls}
            onClick={handleClick}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center
                       flex-shrink-0 shadow-md cursor-pointer select-none"
          >
            <Tinder />
          </motion.div>

          {/* Text + message */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold font-[Dosis] text-gray-900 dark:text-white text-sm md:text-base">
                Tinder
              </span>
              <span className="text-xs bg-pink-100 text-pink-700 font-[Dosis] px-2 py-0.5 rounded-full">
                😂 Joke
              </span>
            </div>

            {swiped ? (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-[Dosis] text-pink-600 font-semibold mt-0.5"
              >
                {msg}
              </motion.p>
            ) : (
              <p className="text-xs text-gray-500 dark:text-gray-400 font-[Dosis] mt-0.5">
                Click the icon. Go on. I dare you.
              </p>
            )}
          </div>

          {/* Animated heart */}
          <motion.span
            animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.5 }}
            className="text-xl flex-shrink-0 cursor-pointer select-none"
            onClick={handleClick}
          >
            🔥
          </motion.span>
        </div>
      </div>
    </div>
  )
}

const LinkComponent = () => {
  return (
    <>
      {/* ── Profile card ── */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-2xl p-5 glassmorphic-container">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-sakura shadow-lg">
              <Image
                src="/images/albert_banda_image.jpg"
                alt="Albert Banda"
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-red-700 text-white text-xs font-[Dosis] font-bold px-2 py-0.5 rounded-full shadow">
              AAI ✓
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold font-[Dosis] text-gray-900 dark:text-white">
              Albert Banda
            </h1>
            <p className="text-sm text-red-700 font-[Dosis] font-semibold mt-0.5">
              System Admin · Backend Engineer · AWS Champion Instructor
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-[Dosis] mt-2 leading-relaxed">
              Based in Lilongwe, Malawi 🇲🇼 — building cloud infrastructure, backend systems,
              and training programmes that create real impact across Africa and beyond.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              {["AWS Champion AAI", "14+ Certifications", "KCNA", "BSc IT"].map((badge, i) => (
                <span key={i} className="text-xs bg-sakura text-gray-800 font-[Dosis] font-semibold px-2.5 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Social links ── */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2">
        <div className="mb-4">
          <span className="font-extrabold text-2xl font-[Dosis]">
            Connect <span className="text-red-700">With Me</span>
          </span>
          <hr className="border-t-4 border-red-700 mt-1 w-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socials.map((social, idx) => (
            <Link
              key={idx}
              href={social.url}
              target={social.url.startsWith('mailto') ? undefined : '_blank'}
              className={`group block glassmorphic-container rounded-2xl border border-sakura-light
                         ${social.hoverBorder} transition-all duration-300 overflow-hidden hover:shadow-xl`}
            >
              <div className="flex items-stretch">
                <div className={`bg-gradient-to-b ${social.color} w-1.5 flex-shrink-0 rounded-l-2xl`} />
                <div className="flex items-center gap-4 p-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center
                                   flex-shrink-0 shadow-md text-white group-hover:scale-110 transition-transform duration-200`}>
                    {social.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold font-[Dosis] text-gray-900 dark:text-white text-sm md:text-base">
                        {social.name}
                      </span>
                      <span className="text-xs bg-sakura-light text-gray-700 font-[Dosis] px-2 py-0.5 rounded-full">
                        {social.badge}
                      </span>
                    </div>
                    <p className="text-xs text-red-700 font-[Dosis] font-semibold">{social.handle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-[Dosis] mt-0.5 leading-snug">
                      {social.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-red-700 group-hover:translate-x-1
                                  transition-all duration-200 flex-shrink-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/* ── Tinder (joke) ── */}
          <TinderButton />
        </div>
      </div>

      {/* ── About blurb ── */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-2xl p-5">
        <span className="font-extrabold text-xl font-[Dosis] block mb-3">
          A little <span className="text-red-700">about me</span>
        </span>
        <div className="space-y-3 text-sm font-[Dosis] text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Linux System Administrator by heart, web developer by skill, cloud specialist by passion,
            and teacher by blood — both my parents are educators. I just chose a slightly different classroom.
          </p>
          <p>
            I love technology across a wide spectrum:{' '}
            <span className="font-bold text-gray-900 dark:text-white">
              Linux, AWS, Docker, Kubernetes, PHP, Laravel, Next.js, Python, Bash, Android, IoT, AI/ML.
            </span>{' '}
            Still learning. Still finding new corners to explore.
          </p>
          <p>
            Want to work together, discuss cloud architecture, commission a training programme,
            or just talk tech? Any of the links above will get to me.
          </p>
        </div>
      </div>
    </>
  )
}

export default LinkComponent
