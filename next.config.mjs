/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/",
                destination: "/home"
            },
            {
                source: "/marketplace",
                destination: "/home/marketplace"
            },
            {
                source: "/create-post",
                destination: "/home/create-post"
            }
        ]
    },
};

export default nextConfig;
