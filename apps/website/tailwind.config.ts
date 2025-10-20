import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { cream: "#FFF8EF", coral: "#FF7F7F", ink: "#111111" },
      borderRadius: { xl: "16px" }
    }
  },
  plugins: []
} satisfies Config;
