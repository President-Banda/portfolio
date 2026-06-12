'use client'
import { useState } from 'react'

const FeedbackForm = ({ articleTitle }) => {
  const [name, setName]       = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!message.trim()) return
    const subject = `Blog Feedback: ${articleTitle}`
    const body    = `${name ? `From: ${name}\n\n` : ''}Article: ${articleTitle}\n\nMessage:\n${message}`
    window.open(
      `mailto:woof-prevail-grub@duck.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
    setSent(true)
    setTimeout(() => { setSent(false); setName(''); setMessage('') }, 4000)
  }

  return (
    <section className="mt-16 border-t border-sakura-light pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-red-700 rounded-full" />
        <h2 className="text-xl font-extrabold font-[Dosis] text-gray-900 dark:text-white">
          Leave <span className="text-red-700">Feedback</span>
        </h2>
      </div>
      <p className="text-sm font-[Dosis] text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
        Thoughts, corrections, questions? Hit send and it goes straight to my inbox.
      </p>

      {sent ? (
        <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700
                        rounded-2xl p-5 text-green-700 dark:text-green-300 font-[Dosis]">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-bold text-sm">Your email client should be open!</p>
            <p className="text-xs opacity-80">Thanks for taking the time to write — I read every message.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold font-[Dosis] text-gray-600 dark:text-gray-400 mb-1.5">
              Name <span className="font-normal opacity-60">(optional)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-2.5 text-sm font-[Dosis] rounded-xl border border-sakura-light
                         bg-white dark:bg-dark-color dark:text-white
                         focus:outline-none focus:border-red-700 transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold font-[Dosis] text-gray-600 dark:text-gray-400 mb-1.5">
              Message <span className="text-red-700">*</span>
            </label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="Share your thoughts, ask a question, or point out an error..."
              className="w-full px-4 py-2.5 text-sm font-[Dosis] rounded-xl border border-sakura-light
                         bg-white dark:bg-dark-color dark:text-white resize-none
                         focus:outline-none focus:border-red-700 transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white
                       text-sm font-bold font-[Dosis] px-6 py-2.5 rounded-xl
                       transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Feedback
          </button>
        </form>
      )}
    </section>
  )
}

export default FeedbackForm
