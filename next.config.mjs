/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.real-estate-manager.redberryinternship.ge",
        port: "",
        pathname: "/storage/images/**",
      },
      {
        protocol: "https",
        hostname: "api.real-estate-manager.redberryinternship.ge",
        port: "",
        pathname: "/storage/agent_avatars/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
