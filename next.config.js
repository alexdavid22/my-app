/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nitlrfwz4bfvtw5q.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
  // ... other configurations
}

module.exports = nextConfig
