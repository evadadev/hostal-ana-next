import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {sans: ['Poppins', 'sans-serif']},
      colors: {
        'primary': 'rgb(161 98 7)',
        'secundary': '#6b7280',
        'grey-ligth': '#9ca3af',
        'black-modal': 'rgb(0 0 0 / 0.8)',
      },
      minHeight: {
        'main-screen': 'calc(100vh - 190px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
    plugins: 
    [
      require('@tailwindcss/forms'),
    ],
  }
}
export default config;
