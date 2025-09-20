import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "images-cdn.openxcell.com",
      pathname:"/**"
      },
      {
      protocol: "https",
      hostname: "images-cdn.openxcell.com",
      pathname:"/**"
      }
   
    ]
  }
};

export default nextConfig;
