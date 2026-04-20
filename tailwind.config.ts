import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        obsidian: "var(--color-obsidian)",
        carbon: "var(--color-carbon)",
        graphite: "var(--color-graphite)",
        gold: "var(--color-gold)",
        "gold-deep": "var(--color-gold-deep)",
        ivory: "var(--color-ivory)",
        silver: "var(--color-silver)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(198, 168, 106, 0.28), 0 12px 34px rgba(0, 0, 0, 0.34)"
      },
      borderRadius: {
        card: "1.15rem"
      },
      backgroundImage: {
        "radial-frame":
          "radial-gradient(1200px 600px at 20% -10%, rgba(198, 168, 106, 0.24), transparent 55%), radial-gradient(700px 400px at 95% 10%, rgba(110, 93, 58, 0.2), transparent 52%)"
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        }
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 560ms cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
