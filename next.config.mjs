/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build
  },
  images: {
    domains: [
      "images.unsplash.com", // Existing domains
      "assets.aceternity.com",
      "preview.redd.it",
      "miro.medium.com",
      "www.bleepstatic.com",
      "sinay.ai",
      "omdia.tech.informa.com",
      "blog.openreplay.com",
      "cdn.sanity.io",
      "global.ariseplay.com",
      "encrypted-tbn0.gstatic.com",
      "www.bootstrapdash.com", // Already added
      "info.6connex.com", // Add this line
    ],
  },
};

export default nextConfig;
