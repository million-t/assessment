import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#7893F1',
        'logo-1': '#424242',
        'logo-2': '#FF7272',
        'avatar-bg': '#ACADC8',
        'card-bg': '#F1F1FD'
      },
      maxWidth: {
        'logo': '39px',
        'search': '1235px',
        'cardImage': '332px',
        'card': '1029px',
      },
      
      width: {
        'search': '1235px'
      
      }

    },
  },
  plugins: [],
};
export default config;
