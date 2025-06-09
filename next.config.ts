/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_SITE_THEME: process.env.NEXT_PUBLIC_SITE_THEME,
  },
};

export default nextConfig;
