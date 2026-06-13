'use client'
import { motion } from 'framer-motion'

export function FadeIn({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', stagger = 0.09 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function PopIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 380, damping: 22, delay }}
    >
      {children}
    </motion.div>
  )
}
