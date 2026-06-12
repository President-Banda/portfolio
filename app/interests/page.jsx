import React from 'react';

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
];

const techStack = [
  "Linux", "AWS", "Docker", "Kubernetes", "Next.js", "Laravel",
  "Terraform", "Python", "Bash", "PostgreSQL", "GitHub Actions", "Nginx",
];

const Interests = () => {
  return (
    <>
      {/* Category cards grid */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`glassmorphic-container rounded-2xl overflow-hidden border ${cat.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${cat.color} px-5 py-4 flex items-center gap-3`}>
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-xl font-extrabold text-white font-[Dosis] tracking-wide">{cat.title}</h2>
              </div>

              {/* Items */}
              <div className="p-4 grid grid-cols-1 gap-2">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sakura-light dark:hover:bg-white dark:hover:bg-opacity-5 transition-colors duration-200 group/item"
                  >
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-red-700 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                    <div>
                      <span className="font-semibold text-sm font-[Dosis] text-gray-900 dark:text-white block leading-tight">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-[Dosis]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech I play with */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5">
        <span className="font-extrabold text-xl font-[Dosis] block mb-1">
          Tech I <span className="text-red-700">Play With</span>
        </span>
        <hr className="border-t-4 border-red-700 mb-4 w-10" />
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-sakura dark:bg-sakura text-gray-800 text-sm font-[Dosis] font-semibold rounded-full
                         hover:bg-red-700 hover:text-white transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Fun fact */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2 border border-solid border-sakura-light rounded-lg p-5 bg-gradient-to-r from-sakura to-sakura-light dark:from-dark-color dark:to-dark-color">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div>
            <span className="font-extrabold font-[Dosis] text-base text-gray-900 dark:text-white block mb-1">Fun fact</span>
            <p className="text-sm font-[Dosis] text-gray-700 dark:text-gray-300 leading-relaxed">
              Both my parents are teachers — my mum teaches nursery school, my dad teaches primary school.
              Neither pushed me into teaching, but here I am: an AWS Champion Authorized Instructor.
              Apparently, it runs in the blood.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interests;
