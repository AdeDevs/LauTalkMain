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
            },
            {
                source: "/payment",
                destination: "/home/payment"
            },
            {
                source: "/manuals",
                destination: "/home/manuals"
            }
        ]
    },
};

export default nextConfig;
