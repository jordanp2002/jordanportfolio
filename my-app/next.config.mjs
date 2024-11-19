/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Only apply basePath and assetPrefix for production builds
    ...(process.env.NODE_ENV === 'production' ? {
        basePath: '/jordanportfolio',
        assetPrefix: '/jordanportfolio/',
    } : {
        basePath: '',
        assetPrefix: '',
    }),
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
