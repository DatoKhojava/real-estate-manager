/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

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
};

export default nextConfig;
