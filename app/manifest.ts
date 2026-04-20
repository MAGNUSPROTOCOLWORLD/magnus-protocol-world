import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MAGNUS PROTOCOL",
    short_name: "Magnus Protocol",
    description:
      "Magnus Protocol is a global technology ecosystem focused on intelligence, infrastructure, secure digital systems, and future-ready innovation.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/brand/icon-1024.png",
        sizes: "1024x1024",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
