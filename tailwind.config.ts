import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        panel: "#111111",
        text: "#E5E7EB",
        sub: "#A3A3A3",
        border: "#262626"
      }
    },
  },
  plugins: [],
}
export default config
