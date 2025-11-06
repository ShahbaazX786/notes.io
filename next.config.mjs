/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
                port: "",
                pathname: "/**", // allow all image paths from this host
            }
        ]
    }
};

export default nextConfig;
