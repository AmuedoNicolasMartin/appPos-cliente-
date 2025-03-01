/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"c.wallhere.com"
      },
      {
        protocol:"https",
        hostname:"img.freepik.com"
      }
    ]
  }

};

export default nextConfig;
