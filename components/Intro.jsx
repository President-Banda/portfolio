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

const titleSegments = [
  { text: 'System ',   red: false },
  { text: 'Admin',     red: true  },
  { text: ', ',   red: false },
  { text: 'Backend ',  red: false },
  { text: 'Engineer',  red: true  },
  { text: ', ',   red: false },
  { text: 'AWS ',      red: false },
  { text: 'Specialist', red: true },
  { text: ' & Champion ', red: false },
  { text: 'Instructor', red: true },
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
        <motion.h1
          className="font-semibold text-2xl sm:text-3xl md:text-5xl leading-snug font-[Dosis]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {titleSegments.map((seg, i) => (
            <motion.span
              key={i}
              className={seg.red ? 'text-red-700' : ''}
              variants={{
                hidden:  { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              {seg.text}
            </motion.span>
          ))}
        </motion.h1>
        <motion.hr
          className="border-t-4 border-gray-700 mt-6 w-32"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* ── About text + CV button ── */}
      <div className="col-span-4 md:col-start-2 md:col-span-2 text-justify m-2 border border-solid border-sakura-light rounded-lg p-4 leading-relaxed font-[Dosis]">
        {[
          "A technology researcher and practitioner with expertise in Linux system administration, AWS cloud technologies, web development, backend engineering, and system deployment. Highly skilled in managing and maintaining complex systems across both Linux and Windows environments — ensuring stability, security, and performance.",
          "Champion AWS Authorized Instructor delivering training across in-person, virtual, and self-paced formats. Holder of 14+ industry certifications including AWS Solutions Architect Professional, Machine Learning Specialty, KCNA, and more. Passionate about translating complex technical concepts into clear, accessible knowledge for teams and organizations.",
          "Currently based in Lilongwe, Malawi — working on cloud infrastructure, backend systems, and training programs that drive real-world impact across Africa and beyond.",
        ].map((para, i) => (
          <motion.p
            key={i}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
          >
            {para}
          </motion.p>
        ))}

        <motion.div
          className="flex items-center gap-4 flex-wrap mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            onClick={handleCvClick}
            className="bg-red-700 text-white font-[Dosis] font-bold text-sm px-6 py-2.5 rounded-xl"
            whileHover={{ scale: 1.06, backgroundColor: '#991b1b' }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            Curriculum Vitae
          </motion.button>

          <AnimatePresence>
            {joke && (
              <motion.span
                key={joke.text}
                initial={{ opacity: 0, x: -10, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.85 }}
                transition={{ duration: 0.22 }}
                className="text-sm font-[Dosis] font-semibold text-red-700 dark:text-red-400"
              >
                {joke.emoji} {joke.text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Photo (desktop only) ── */}
      <div className="hidden md:block col-start-4 col-span-1 -mt-48">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
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
        </motion.div>
      </div>

      {/* ── Core Values ── */}
      <div className="col-span-4 md:col-start-2 md:col-span-2 m-2">
        <motion.p
          className="text-sm font-thin font-[Dosis] text-gray-500 dark:text-gray-400 mb-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          My Core Values
        </motion.p>
        <motion.div
          className="grid grid-cols-3 gap-2"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1.35 } } }}
        >
          {['Respect', 'Integrity', 'Humour'].map(value => (
            <motion.div
              key={value}
              className="border border-solid border-sakura-light rounded-lg p-3 text-center font-[Dosis] font-medium text-sm md:text-base cursor-default"
              variants={{
                hidden:  { opacity: 0, scale: 0.75 },
                visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 20 } },
              }}
              whileHover={{ scale: 1.07, borderColor: '#b91c1c' }}
            >
              <span className="text-red-700">&apos;</span>
              {value}
              <span className="text-red-700">&apos;</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
