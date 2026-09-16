/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CESIUM_ION_TOKEN: process.env.CESIUM_ION_TOKEN
  },
  basePath: "/portal"
};

export default nextConfig;
