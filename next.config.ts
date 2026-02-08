import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // image config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        pathname: "/demos/images/**",
      },
    ],
  },
 // image config -end
};

export default nextConfig;