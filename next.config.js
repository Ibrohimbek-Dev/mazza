/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["image.tmdb.org", "rb.gy", "images.unsplash.com", "firebasestorage.googleapis.com"],
	},
	output: {
    dir: 'out', // Set your desired output directory
  },
};

module.exports = nextConfig;
