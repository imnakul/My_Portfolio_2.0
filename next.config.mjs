/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/**', // Allow all paths under Cloudinary
         },
      ],
   },
}

export default nextConfig
