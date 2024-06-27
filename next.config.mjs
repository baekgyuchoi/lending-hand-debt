/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com', "images.unsplash.com", "webagencynews-images.s3.amazonaws.com","webagencynews-images.s3.us-east-2.amazonaws.com"],
        unoptimized: true,
    },
}
export default nextConfig;
