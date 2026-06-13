'use client'
import { motion } from 'framer-motion'

const categories = [
  {
    title: "Intellectual",
    icon: "🧠",
    color: "from-violet-400 to-purple-500",
    borderColor: "border-violet-300 dark:border-violet-700",
    items: [
      { label: "Programming", desc: "Building tools, APIs, and systems" },
      { label: "Automation", desc: "Making repetitive things disappear" },
      { label: "Reading", desc: "Tech blogs, docs, and the odd novel" },
      { label: "Research", desc: "Digging deep into new technologies" },
      { label: "AI & ML", desc: "Following advancements in machine learning" },
      { label: "Cloud Architecture", desc: "Designing scalable systems on AWS" },
    ],
  },
  {
    title: "Casual",
    icon: "🎮",
    color: "from-pink-400 to-rose-500",
    borderColor: "border-pink-300 dark:border-pink-700",
    items: [
      { label: "Anime", desc: "Naruto, Attack on Titan, Jujutsu Kaisen..." },
      { label: "Gaming", desc: "PC gaming when the mood strikes" },
      { label: "Movies", desc: "Sci-fi, action, and the occasional documentary" },
      { label: "Music", desc: "Whatever plays in the background" },
      { label: "Linux Tweaking", desc: "Config files are a form of art" },
      { label: "Customization", desc: "Making tech look and feel perfect" },
    ],
  },
  {
    title: "Physical",
    icon: "💪",
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-300 dark:border-emerald-700",
    items: [
      { label: "Gym", desc: "Consistency over intensity" },
      { label: "Volleyball", desc: "Favourite team sport" },
      { label: "Football", desc: "Casual kick-around when the opportunity arises" },
      { label: "Walking", desc: "The original think-time activity" },
    ],
  },
  {
    title: "Misc.",
    icon: "✨",
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-300 dark:border-amber-700",
    items: [
      { label: "Twitter / X", desc: "Tech news and the occasional hot take" },
      { label: "Cleaning", desc: "A tidy desk is a tidy mind" },
      { label: "Sleep", desc: "Underrated performance optimization" },
      { label: "Teaching", desc: "Explaining things makes you understand them better" },
      { label: "System Tuning", desc: "Squeezing performance out of everything" },
    ],
  },
]

const techStack = [
  "Linux", "AWS", "Docker", "Kubernetes", "Next.js", "Laravel",
  "Terraform", "Python", "Bash", "PostgreSQL", "GitHub Actions", "Nginx",
]

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
}

const Interests = () => {
  return (
    <>
      {/* Category cards grid */}
      <motion.div
        className="col-span-4 md:col-start-2 md:col-span-3 m-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className={`glassmorphic-container rounded-2xl overflow-hidden border ${cat.borderColor} hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${cat.color} px-5 py-4 flex items-center gap-3`}>
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
                  transition={{ duration: 1.4, delay: catIdx * 0.2, repeat: Infinity, repeatDelay: 4 }}
                >
                  {cat.icon}
                </motion.span>
                <h2 className="text-xl font-extrabold text-white font-[Dosis] tracking-wide">{cat.title}</h2>
              </div>

              {/* Items — stagger on scroll */}
              <motion.div
                className="p-4 grid grid-cols-1 gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              >
                {cat.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sakura-light dark:hover:bg-white dark:hover:bg-opacity-5 transition-colors duration-200 group/item"
                  >
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-red-700 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                    <div>
                      <span className="font-semibold text-sm font-[Dosis] text-gray-900 dark:text-white block leading-tight">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-[Dosis]">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech I play with */}
      <motion.div
        className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="font-extrabold text-xl font-[Dosis] block mb-1">
          Tech I <span className="text-red-700">Play With</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-4 w-10" />
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden:  { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 18 } },
              }}
              whileHover={{ scale: 1.12, backgroundColor: '#b91c1c', color: '#fff' }}
              className="px-3 py-1.5 bg-sakura dark:bg-sakura text-gray-800 text-sm font-[Dosis] font-semibold rounded-full cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Fun fact */}
      <motion.div
        className="col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 bg-gradient-to-r from-sakura to-sakura-light dark:from-dark-color dark:to-dark-color"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-start gap-3">
          <motion.span
            className="text-2xl flex-shrink-0"
            animate={{ rotate: [0, 20, -10, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            💡
          </motion.span>
          <div>
            <span className="font-extrabold font-[Dosis] text-base text-gray-900 dark:text-white block mb-1">Fun fact</span>
            <p className="text-sm font-[Dosis] text-gray-700 dark:text-gray-300 leading-relaxed">
              Both my parents are teachers — my mum teaches nursery school, my dad teaches primary school.
              Neither pushed me into teaching, but here I am: an AWS Champion Authorized Instructor.
              Apparently, it runs in the blood.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Interests
