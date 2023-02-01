/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", 
      "graphie.web.id",
      "api.duckie.land"
    ]
  }
}

module.exports = nextConfig
