/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "companieslogo.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
