/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // hostname: "firebasestorage.googleapis.com",
                hostname: "utfs.io",
            },
        ],
    },
};

export default nextConfig;