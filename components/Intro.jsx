'use client'
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const jokes = [
  { emoji: "📄", text: "Hold on, let me dust this off..." },
  { emoji: "🚀", text: "Warning: may cause immediate hire." },
  { emoji: "🏆", text: "14+ certs. Yes, I have a problem." },
  { emoji: "☁️", text: "It's stored in the cloud. Obviously." },
  { emoji: "🐧", text: "Currently in a committed relationship with Linux." },
  { emoji: "😎", text: "Spoiler: it's pretty impressive." },
  { emoji: "⏳", text: "Loading credentials... 100% complete." },
  { emoji: "🧠", text: "No Comic Sans were harmed making this CV." },
]

export default function Intro() {
  const [joke, setJoke] = useState(null)

  const handleCvClick = () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)]
    setJoke(random)
    setTimeout(() => setJoke(null), 2500)
  }

  return (
    <>
      {/* ── Title ── */}
      <div className="col-span-4 md:col-start-2 md:col-span-2 text-justify m-2 border border-solid border-sakura-light rounded-lg p-4 leading-relaxed">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-snug font-[Dosis]">
          System <span className="text-red-700">Admin</span>,{' '}
          Backend <span className="text-red-700">Engineer</span>,{' '}
          AWS <span className="text-red-700">Specialist</span>{' '}
          &amp; Champion <span className="text-red-700">Instructor</span>
        </h1>
        <hr className="border-t-4 border-gray-700 mt-6 w-32" />
      </div>

      {/* ── About text + CV button ── */}
      <div className="col-span-4 md:col-start-2 md:col-span-2 text-justify m-2 border border-solid border-sakura-light rounded-lg p-4 leading-relaxed font-[Dosis]">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
          A technology researcher and practitioner with expertise in Linux system administration,
          AWS cloud technologies, web development, backend engineering, and system deployment.
          Highly skilled in managing and maintaining complex systems across both Linux and Windows
          environments — ensuring stability, security, and performance.
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
          Champion AWS Authorized Instructor delivering training across in-person, virtual, and
          self-paced formats. Holder of 14+ industry certifications including AWS Solutions Architect
          Professional, Machine Learning Specialty, KCNA, and more. Passionate about translating
          complex technical concepts into clear, accessible knowledge for teams and organizations.
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
          Currently based in Lilongwe, Malawi — working on cloud infrastructure, backend systems,
          and training programs that drive real-world impact across Africa and beyond.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={handleCvClick}
            className="bg-red-700 hover:bg-red-800 text-white font-[Dosis] font-bold
                       text-sm px-6 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Curriculum Vitae
          </button>

          <AnimatePresence>
            {joke && (
              <motion.span
                key={joke.text}
                initial={{ opacity: 0, x: -8, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-[Dosis] font-semibold text-red-700 dark:text-red-400"
              >
                {joke.emoji} {joke.text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Photo (desktop only) ── */}
      <div className="hidden md:block col-start-4 col-span-1 -mt-48">
        <div className="bg-sakura rounded-xl scale-90 bg-opacity-50">
          <div className="bg-sakura-light rounded-xl -rotate-6 bg-opacity-50">
            <Image
              src="/images/albert_gown.jpg"
              alt="Albert Banda"
              width={500}
              height={500}
              loading="lazy"
              className="transition duration-100 rounded-xl shadow-inner scale-90 origin-center -rotate-12 hover:rotate-45 hover:origin-top"
              sizes="(max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="col-span-4 md:col-start-2 md:col-span-2 m-2">
        <p className="text-sm font-thin font-[Dosis] text-gray-500 dark:text-gray-400 mb-2 text-center">
          My Core Values
        </p>
        <div className="grid grid-cols-3 gap-2">
          {['Respect', 'Integrity', 'Humour'].map(value => (
            <div key={value} className="border border-solid border-sakura-light rounded-lg p-3 text-center font-[Dosis] font-medium text-sm md:text-base">
              <span className="text-red-700">'</span>
              {value}
              <span className="text-red-700">'</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
