import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        page: "#111111",
        surface: "#1A1A1A",
        "surface-2": "#222222",
        gold: "#C9A961",
        "gold-soft": "#9e8549",
        ivory: "#F5EFE0",
        muted: "#8A8A8A",
        "muted-2": "#6a6a6a",
        success: "#7A9B6E",
        alert: "#B85C3C",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
