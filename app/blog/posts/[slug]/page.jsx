import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import Link from 'next/link'
import getPostMetaData from '../../../../components/getPostMetaData'
import Scroll from '../../../../components/Scroll'
import FeedbackForm from '../../../../components/FeedbackForm'

const categoryColors = {
  'AWS':            'bg-amber-100 text-amber-800',
  'ML & AI':        'bg-violet-100 text-violet-800',
  'Infrastructure': 'bg-teal-100 text-teal-800',
  'Fundamentals':   'bg-sky-100 text-sky-800',
}

const getPostContent = slug => {
  const file = `posts/aws/${slug}.md`
  const raw  = fs.readFileSync(file, 'utf8')
  return matter(raw)
}

const deriveCategory = (title = '', slug = '') => {
  const t = (title + ' ' + slug).toLowerCase()
  if (t.includes('machine learning') || t.includes('ai vs') || t.includes('ai_vs') || t.includes('deep learning')) return 'ML & AI'
  if (t.includes('cloudformation') || t.includes('infrastructure')) return 'Infrastructure'
  if (t.includes('what is') || t.includes('what_is')) return 'Fundamentals'
  return 'AWS'
}

const readTime = content =>
  Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))

export const generateStaticParams = async () =>
  getPostMetaData().map(post => ({ slug: post.slug }))

// Markdown component overrides — no duplicate keys
const mdOverrides = {
  h1: { props: { className: 'text-3xl font-extrabold font-[Dosis] mt-8 mb-4 text-gray-900 dark:text-white' } },
  h2: { props: { className: 'text-2xl font-bold font-[Dosis] mt-8 mb-3 text-gray-900 dark:text-white border-b border-sakura-light pb-2' } },
  h3: { props: { className: 'text-xl font-bold font-[Dosis] mt-6 mb-2 text-gray-900 dark:text-white' } },
  p:  { props: { className: 'text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300 font-[Dosis]' } },
  a:  { props: { className: 'text-red-700 hover:underline font-semibold' } },
  strong: { props: { className: 'font-bold text-gray-900 dark:text-white' } },
  blockquote: { props: { className: 'border-l-4 border-sakura pl-4 italic text-gray-500 dark:text-gray-400 my-4' } },
  ul: { props: { className: 'list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300 font-[Dosis]' } },
  ol: { props: { className: 'list-decimal list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300 font-[Dosis]' } },
  code: { props: { className: 'bg-sakura-light dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-red-700 dark:text-pink-300' } },
  img: { props: { className: 'rounded-xl my-6 w-full shadow-md' } },
}

const Article = async ({ params }) => {
  const { slug } = await params
  const post     = getPostContent(slug)
  const category = post.data.category ?? deriveCategory(post.data.title, slug)
  const mins     = readTime(post.content)

  return (
    <>
      <Scroll />

      {/* ── Article hero ── */}
      <div className="bg-gradient-to-br from-sakura-light to-white dark:from-dark-color dark:to-dark-color
                      rounded-2xl border border-sakura-light p-6 md:p-10 mb-6">

        {/* Back link */}
        <Link href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-[Dosis] font-semibold text-gray-500
                     hover:text-red-700 transition-colors mb-5 group">
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-150"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Category + read time */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-[Dosis] font-semibold px-3 py-1 rounded-full ${categoryColors[category] ?? categoryColors['AWS']}`}>
            {category}
          </span>
          <span className="text-xs text-gray-400 font-[Dosis] flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {mins} min read
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold font-[Dosis] text-gray-900 dark:text-white leading-tight mb-3">
          {post.data.title}
        </h1>

        {post.data.subtitle && (
          <p className="text-base text-gray-500 dark:text-gray-400 font-[Dosis] mb-4 leading-relaxed">
            {post.data.subtitle}
          </p>
        )}

        <div className="flex items-center gap-3 pt-4 border-t border-sakura-light">
          <div className="w-7 h-7 rounded-full bg-red-700 flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div>
            <p className="text-xs font-bold font-[Dosis] text-gray-900 dark:text-white">Albert Banda</p>
            <p className="text-xs text-gray-400 font-[Dosis]">{post.data.date}</p>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="bg-white dark:bg-dark-color border border-sakura-light rounded-2xl p-6 md:p-10 mb-4">
        <Markdown options={{ overrides: mdOverrides }}>
          {post.content}
        </Markdown>
      </div>

      {/* ── Feedback ── */}
      <div className="bg-white dark:bg-dark-color border border-sakura-light rounded-2xl p-6 md:p-10">
        <FeedbackForm articleTitle={post.data.title} />
      </div>
    </>
  )
}

export default Article
