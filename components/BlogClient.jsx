'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const categoryColors = {
  'All':            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200',
  'AWS':            'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  'ML & AI':        'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
  'Infrastructure': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  'Fundamentals':   'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.2 } },
}

const BlogClient = ({ posts }) => {
  const [query,       setQuery]       = useState('')
  const [activeCategory, setCategory] = useState('All')

  const allCategories = useMemo(() => {
    const cats = new Set(['All'])
    posts.forEach(p => { if (p.category) cats.add(p.category) })
    return [...cats]
  }, [posts])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return posts.filter(p => {
      const matchesQuery =
        !q ||
        p.title?.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q)
      const matchesCat = activeCategory === 'All' || p.category === activeCategory
      return matchesQuery && matchesCat
    })
  }, [posts, query, activeCategory])

  return (
    <div>
      {/* ── Search + filter bar ── */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Search */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-9 py-3 text-sm font-[Dosis] rounded-xl border border-sakura-light
                       bg-white dark:bg-dark-color dark:text-white
                       focus:outline-none focus:border-red-700 transition-colors duration-200"
          />
          {query && (
            <button onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full
                         bg-gray-200 dark:bg-gray-700 text-gray-500 hover:text-red-700
                         flex items-center justify-center text-xs transition-colors">
              ✕
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {allCategories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              whileTap={{ scale: 0.92 }}
              className={`text-xs font-[Dosis] font-semibold px-3 py-1.5 rounded-full transition-all duration-200
                ${activeCategory === cat
                  ? 'bg-red-700 text-white shadow-md ring-2 ring-red-300'
                  : `${categoryColors[cat] ?? categoryColors['AWS']} hover:ring-1 hover:ring-red-400`
                }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60 text-[10px]">
                ({cat === 'All' ? posts.length : posts.filter(p => p.category === cat).length})
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Result count ── */}
      <p className="text-xs text-gray-400 dark:text-gray-500 font-[Dosis] mb-5">
        {filtered.length} article{filtered.length !== 1 ? 's' : ''}
        {query && <span> matching &ldquo;{query}&rdquo;</span>}
      </p>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center py-16">
          <span className="text-5xl block mb-4">🔍</span>
          <p className="font-[Dosis] font-semibold text-gray-500 dark:text-gray-400 mb-2">
            No articles match your search.
          </p>
          <button
            onClick={() => { setQuery(''); setCategory('All') }}
            className="text-sm text-red-700 font-[Dosis] font-semibold hover:underline">
            Clear filters
          </button>
        </motion.div>
      )}

      {/* ── Article grid ── */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((post, idx) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href={`/blog/posts/${post.slug}`} className="group block h-full">
                <div className="glassmorphic-container rounded-2xl border border-sakura-light
                                group-hover:border-red-700 group-hover:shadow-xl
                                transition-colors duration-300 p-5 h-full flex flex-col">

                  {/* Top row: category + read time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-[Dosis] font-semibold px-2.5 py-0.5 rounded-full
                      ${categoryColors[post.category] ?? categoryColors['AWS']}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-[Dosis] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold font-[Dosis] text-gray-900 dark:text-white text-base leading-snug
                                 group-hover:text-red-700 transition-colors duration-200 mb-2">
                    {post.title}
                  </h3>

                  {/* Subtitle */}
                  {post.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-[Dosis] line-clamp-2 flex-1 leading-relaxed">
                      {post.subtitle}
                    </p>
                  )}

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-sakura-light">
                    <span className="text-xs text-gray-400 font-[Dosis]">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-red-700 font-[Dosis] font-semibold
                                     group-hover:gap-2 transition-all duration-200">
                      Read
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default BlogClient
