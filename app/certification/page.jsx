'use client'
import { useState } from "react"
import Link from "next/link"

const certifications = [
  // AWS Professional / Specialty
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    issued: "April 17, 2026",
    expires: "April 16, 2029",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "December 15, 2025",
    expires: "April 16, 2029",
    level: "Foundational",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "December 6, 2025",
    expires: "December 5, 2028",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    issued: "May 4, 2025",
    expires: "May 3, 2028",
    level: "Advanced",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    issued: "September 9, 2024",
    expires: "September 8, 2027",
    level: "Advanced",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    issued: "June 23, 2023",
    expires: "June 22, 2026",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "May 7, 2022",
    expires: "May 3, 2028",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "December 13, 2021",
    expires: "April 16, 2029",
    level: "Foundational",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-sky-400 to-blue-500",
  },
  // AWS Instructor / Experience
  {
    name: "Champion – AWS Authorized Instructor",
    issuer: "Amazon Web Services",
    issued: "May 17, 2023",
    expires: "January 31, 2027",
    level: "Champion",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "AI/ML Guide",
    issuer: "Amazon Web Services",
    issued: "April 24, 2026",
    expires: "No expiry",
    level: "Advanced",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "AAI Industry Cohort: Automotive",
    issuer: "Amazon Web Services",
    issued: "April 23, 2026",
    expires: "No expiry",
    level: "Advanced",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    issued: "January 7, 2022",
    expires: "No expiry",
    level: "Foundational",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-sky-400 to-blue-500",
  },
  // Linux Foundation
  {
    name: "KCNA: Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    issued: "May 21, 2026",
    expires: "May 20, 2028",
    level: "Foundational",
    category: "linux",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "LFS250: Kubernetes and Cloud Native Essentials",
    issuer: "The Linux Foundation",
    issued: "June 12, 2025",
    expires: "No expiry",
    level: "Foundational",
    category: "linux",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-teal-400 to-cyan-500",
  },
  // Other
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    issued: "June 4, 2023",
    expires: "No expiry",
    level: "Intermediate",
    category: "other",
    credlyUrl: "https://www.freecodecamp.org/certification/albertbanda/front-end-development-libraries",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "ALX-T Cloud Developer Nanodegree",
    issuer: "Udacity",
    issued: "October 19, 2022",
    expires: "No expiry",
    level: "Intermediate",
    category: "other",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "SQL Basic",
    issuer: "HackerRank",
    issued: "March 2022",
    expires: "No expiry",
    level: "Foundational",
    category: "other",
    credlyUrl: "https://www.hackerrank.com/certificates",
    color: "from-lime-400 to-green-500",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "aws", label: "AWS Certifications" },
  { id: "aws-instructor", label: "AWS Instructor" },
  { id: "linux", label: "Linux Foundation" },
  { id: "other", label: "Other" },
]

const levelBadge = {
  "Foundational": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  "Intermediate": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Advanced":     "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Champion":     "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
}

const CategoryIcon = ({ category }) => {
  if (category === "aws" || category === "aws-instructor") {
    return (
      <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fill="white">☁</text>
      </svg>
    )
  }
  if (category === "linux") {
    return (
      <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fill="white">⚙</text>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 80 80" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fill="white">🏅</text>
    </svg>
  )
}

const Certification = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? certifications
    : certifications.filter(c => c.category === activeCategory)

  return (
    <>
      {/* Header */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 text-justify m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-5 font-['Roboto']">
        <span className="font-extrabold text-xl md:text-5xl leading-snug font-[Dosis] block mb-3">
          My <span className="text-red-700">Certifications</span>
        </span>
        <p className="font-[Dosis] leading-relaxed text-gray-700 dark:text-gray-300">
          A collection of certifications earned across AWS, Kubernetes, and web development — reflecting a commitment
          to continuous learning and mastery in cloud and infrastructure technologies.
        </p>
        <Link
          href="https://www.credly.com/users/albert-banda/badges"
          target="_blank"
          className="inline-block mt-3 bg-sakura-light hover:bg-sakura text-gray-900 text-xs font-bold uppercase px-4 py-2 rounded-lg transition-all duration-300 font-[Dosis]"
        >
          View All on Credly →
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 mx-2 flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs md:text-sm font-[Dosis] font-semibold px-3 py-1.5 rounded-full transition-all duration-200
              ${activeCategory === cat.id
                ? "bg-red-700 text-white shadow-md"
                : "bg-sakura-light hover:bg-sakura text-gray-800"
              }`}
          >
            {cat.label}
            <span className="ml-1 text-xs opacity-70">
              ({cat.id === "all" ? certifications.length : certifications.filter(c => c.category === cat.id).length})
            </span>
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="col-start-2 col-span-4 md:col-start-2 md:col-span-3 m-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((cert, idx) => (
            <Link
              key={idx}
              href={cert.credlyUrl}
              target="_blank"
              className="group block"
            >
              <div className="glassmorphic-container overflow-hidden rounded-xl border border-sakura-light
                              hover:border-red-700 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Gradient banner */}
                <div className={`bg-gradient-to-r ${cert.color} p-5 flex items-center gap-3`}>
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CategoryIcon category={cert.category} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold opacity-90 font-[Dosis] truncate">{cert.issuer}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-[Dosis] font-semibold mt-1 inline-block ${levelBadge[cert.level]}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white font-[Dosis] leading-snug mb-3">
                    {cert.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 font-[Dosis]">
                      <span>Issued</span>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 font-[Dosis]">
                      <span>Expires</span>
                      <span className={`font-semibold ${cert.expires === "No expiry" ? "text-green-600" : "text-gray-700 dark:text-gray-300"}`}>
                        {cert.expires}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-red-700 font-[Dosis] font-semibold group-hover:underline">
                    View Credential →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Certification
