import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 本番公開時は imgbp.hotp.jp ドメインを削除し、自前の画像のみに差し替えること
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgbp.hotp.jp",
      },
    ],
  },
};

export default nextConfig;
