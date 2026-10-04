/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensuring photos always load reliably on Vercel or any static host
  },
};

export default nextConfig;
