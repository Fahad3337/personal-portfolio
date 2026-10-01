import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/Fahad_Yusuf_Qureshi_CV.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Fahad_Yusuf_Qureshi_CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
