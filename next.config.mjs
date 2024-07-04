/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.imgacademy.com'], 
      },
      env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      },
    
};

export default nextConfig;
