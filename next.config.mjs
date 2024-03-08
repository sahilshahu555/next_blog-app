/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
            },
            {
                protocol: 'https',
                hostname: "m.media-amazon.com"
            },
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            },
            {
                protocol: 'https',
                hostname: "media.istockphoto.com"
            },
           
        ]
    },
};

export default nextConfig;
