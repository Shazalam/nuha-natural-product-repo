/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'clipartmax.com',"www.rootsveyr.com"], // ✅ no slashes!
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clipartmax.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.clipartmax.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rootsveyr.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
