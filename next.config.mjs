/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CESIUM_ION_TOKEN: process.env.CESIUM_ION_TOKEN,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN
  },
  basePath: "/portal"
};

export default nextConfig;
