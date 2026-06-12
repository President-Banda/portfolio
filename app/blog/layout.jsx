import Image from 'next/image'
import Link from 'next/link'

const BlogLayout = ({ children }) => {
  return (
    <div className="col-span-4 md:col-start-2 md:col-span-3">
      {/* Blog header */}
      <header className="flex items-center gap-4 bg-gradient-to-r from-sakura to-sakura-light dark:from-dark-color dark:to-dark-color
                         border border-sakura-light rounded-2xl px-5 py-4 mb-4 shadow-sm">
        <Link href="/blog" className="flex-shrink-0">
          <Image src="/animated.png" width={48} height={48} alt="blog logo"
            className="rounded-xl hover:scale-110 transition-transform duration-200" />
        </Link>
        <div className="flex-1 min-w-0">
          <Link href="/blog">
            <h1 className="text-lg font-extrabold font-[Dosis] text-gray-900 dark:text-white hover:text-red-700 transition-colors">
              Albert&apos;s Blog
            </h1>
          </Link>
          <p className="text-xs font-[Dosis] text-gray-600 dark:text-gray-400">
            Cloud, infrastructure, and lessons from the terminal
          </p>
        </div>
        <Link href="/blog"
          className="hidden md:flex items-center gap-1 text-xs font-[Dosis] font-semibold text-red-700
                     hover:underline flex-shrink-0">
          ← All Posts
        </Link>
      </header>

      {/* Page content */}
      <div className="min-h-0">
        {children}
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-sakura-light text-center">
        <p className="text-xs font-[Dosis] text-gray-400 dark:text-gray-500">
          Written by{' '}
          <Link href="/" className="text-red-700 font-semibold hover:underline">
            Albert Banda
          </Link>
          {' '}· AWS Champion Instructor · Lilongwe, Malawi
        </p>
      </footer>
    </div>
  )
}

export default BlogLayout
