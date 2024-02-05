/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['tmdb.org', 'themoviedb.org', "image.tmdb.org", 'localhost', 'rb.gy', "occ-0-2611-3663.1.nflxso.net"],
    },
    // unoptimized: true,
};

export default nextConfig;
