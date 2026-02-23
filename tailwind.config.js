/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ecec",
        "primary-dark": "#0fbdbd",
        "primary-light": "#e0fdfd",
        "background-light": "#ffffff",
        "background-dark": "#102222",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2c2c",
        "text-main": "#111818",
        "text-secondary": "#618989",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
