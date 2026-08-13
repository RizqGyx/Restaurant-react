/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF8F4",
          deep: "#F4EEE6",
        },
        ember: {
          50: "#FFF6ED",
          100: "#FFEAD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        ink: {
          50: "#FAF9F7",
          100: "#F3F1ED",
          200: "#E7E3DB",
          300: "#D3CCC0",
          400: "#A8A093",
          500: "#7C7568",
          600: "#5C564C",
          700: "#423E37",
          800: "#2B2823",
          900: "#1A1815",
          950: "#0F0E0C",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "Cambria", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["4.75rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,24,21,.04), 0 8px 24px -14px rgba(26,24,21,.22)",
        lift: "0 2px 6px rgba(26,24,21,.05), 0 28px 56px -28px rgba(26,24,21,.38)",
        hairline: "0 0 0 1px rgba(26,24,21,.07)",
        ember: "0 12px 32px -12px rgba(234,88,12,.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(.22,1,.36,1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fade-in .5s ease both",
        marquee: "marquee 38s linear infinite",
        "slow-zoom": "slow-zoom 18s ease-out both",
      },
    },
  },
  plugins: [],
};
