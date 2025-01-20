import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1a202c", // Example primary color for headings
        secondary: "#4a5568", // Example secondary color for text
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "var(--foreground)", // Use your custom colors
              fontSize: "2.25rem", // Larger and more distinct
              fontWeight: "700",
              marginTop: "1.5rem",
              marginBottom: "1rem",
            },
            h2: {
              color: "var(--foreground)",
              fontSize: "1.875rem",
              fontWeight: "600",
              marginTop: "1.25rem",
              marginBottom: "0.75rem",
            },
            h3: {
              color: "var(--foreground)",
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "1rem",
              marginBottom: "0.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Add the plugin here
} satisfies Config;

