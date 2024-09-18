/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  plugins: [
      "postcss-import",
      "tailwindcss",
      "autoprefixer",
      "framer-motion"
    ],
}

module.exports = nextConfig
