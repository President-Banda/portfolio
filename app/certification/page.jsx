'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const certifications = [
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    issued: "April 17, 2026",
    expires: "April 16, 2029",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/image.png",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "December 15, 2025",
    expires: "April 16, 2029",
    level: "Foundational",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "December 6, 2025",
    expires: "December 5, 2028",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    issued: "May 4, 2025",
    expires: "May 3, 2028",
    level: "Advanced",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    issued: "September 9, 2024",
    expires: "September 8, 2027",
    level: "Advanced",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/778bde6c-ad1c-4312-ac33-2fa40d50a147/image.png",
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    issued: "June 23, 2023",
    expires: "June 22, 2026",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    issued: "May 7, 2022",
    expires: "May 3, 2028",
    level: "Intermediate",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "December 13, 2021",
    expires: "April 16, 2029",
    level: "Foundational",
    category: "aws",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    name: "Champion – AWS Authorized Instructor",
    issuer: "Amazon Web Services",
    issued: "May 17, 2023",
    expires: "January 31, 2027",
    level: "Champion",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/6a23d249-d0c4-4bfb-9920-f7f6700c283e/image.png",
  },
  {
    name: "AI/ML Guide",
    issuer: "Amazon Web Services",
    issued: "April 24, 2026",
    expires: "No expiry",
    level: "Advanced",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/6ba64e1e-42da-41e6-bbb4-af8ba7e8559c/blob",
  },
  {
    name: "AAI Industry Cohort: Automotive",
    issuer: "Amazon Web Services",
    issued: "April 23, 2026",
    expires: "No expiry",
    level: "Advanced",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/fda9a38a-af90-4919-9524-9bd18093cf4b/blob",
  },
  {
    name: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    issued: "January 7, 2022",
    expires: "No expiry",
    level: "Foundational",
    category: "aws-instructor",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
  },
  {
    name: "KCNA: Kubernetes and Cloud Native Associate",
    issuer: "The Linux Foundation",
    issued: "May 21, 2026",
    expires: "May 20, 2028",
    level: "Foundational",
    category: "linux",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/f28f1d88-428a-47f6-95b5-7da1dd6c1000/KCNA_badge.png",
  },
  {
    name: "LFS250: Kubernetes and Cloud Native Essentials",
    issuer: "The Linux Foundation",
    issued: "June 12, 2025",
    expires: "No expiry",
    level: "Foundational",
    category: "linux",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: "https://images.credly.com/images/7404ca0d-98e1-48b6-a2a3-de8d7dcd85b5/blob",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    issued: "June 4, 2023",
    expires: "No expiry",
    level: "Intermediate",
    category: "other",
    credlyUrl: "https://www.freecodecamp.org/certification/albertbanda/front-end-development-libraries",
    badgeImage: null,
    badgeEmoji: "🟢",
  },
  {
    name: "ALX-T Cloud Developer Nanodegree",
    issuer: "Udacity",
    issued: "October 19, 2022",
    expires: "No expiry",
    level: "Intermediate",
    category: "other",
    credlyUrl: "https://www.credly.com/users/albert-banda/badges",
    badgeImage: null,
    badgeEmoji: "🔵",
  },
  {
    name: "SQL Basic",
    issuer: "HackerRank",
    issued: "March 2022",
    expires: "No expiry",
    level: "Foundational",
    category: "other",
    credlyUrl: "https://www.hackerrank.com/certificates",
    badgeImage: null,
    badgeEmoji: "🟩",
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
  "Intermediate":  "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Advanced":      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Champion":      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
}

const Certification = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? certifications
    : certifications.filter(c => c.category === activeCategory)

  return (
    <>
      {/* Filter Tabs */}
      <div className="col-span-4 md:col-start-2 md:col-span-3 mx-2 mt-2 flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
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
        <Link
          href="https://www.credly.com/users/albert-banda/badges"
          target="_blank"
          className="text-xs font-[Dosis] font-semibold text-red-700 hover:underline whitespace-nowrap"
        >
          View all on Credly →
        </Link>
      </div>

      {/* Certifications Grid */}
      <motion.div
        className="col-span-4 md:col-start-2 md:col-span-3 m-2"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden:  { opacity: 0, y: 24, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="h-full"
            >
              <Link href={cert.credlyUrl} target="_blank" className="group block h-full">
                <div className="glassmorphic-container overflow-hidden rounded-xl border border-sakura-light
                                hover:border-red-700 transition-all duration-300 hover:shadow-xl h-full flex flex-col">

                  {/* Badge image area */}
                  <div className="flex items-center justify-center bg-white dark:bg-gray-950 p-5 border-b border-sakura-light">
                    {cert.badgeImage ? (
                      <Image
                        src={cert.badgeImage}
                        alt={cert.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    ) : (
                      <div className="w-24 h-24 flex items-center justify-center text-5xl">
                        {cert.badgeEmoji}
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-[Dosis] font-semibold truncate">
                          {cert.issuer}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-[Dosis] font-semibold flex-shrink-0 ${levelBadge[cert.level]}`}>
                          {cert.level}
                        </span>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white font-[Dosis] leading-snug mb-3">
                        {cert.name}
                      </h3>
                    </div>
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
                      <div className="mt-3 text-xs text-red-700 font-[Dosis] font-semibold group-hover:underline pt-1">
                        View Credential →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Certification
