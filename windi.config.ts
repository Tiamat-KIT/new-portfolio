import { defineConfig,transform } from 'windicss/helpers'
import colors from "windicss/colors"
import typography from "windicss/plugin/typography"


export default defineConfig({
  extract: {
    include: ['src/**/*.{js,ts,jsx,tsx}'],
  },
  safelist: ['prose','prose-sm','m-auto'],
  darkMode: 'class',
  plugins: [
    transform('daisyui'),
    transform('@tailwindcss/typography'),
    typography  
  ],
  /* theme: {
    light: {
        ...require("daisyui/dist/base")["[data-theme=light]"],
        "info": "rgba(165,234,255,0.2)",
        "base-content": "black",
    },
    dracula: {
        ...require("daisyui/dist/base")["[data-theme=dracula]"],
        "base-100": "#606060",
        "base-content": "white",
        "info": "#0026A1",
    },
    darkTheme: "dracula",
    screens: {
        "desktop": "1440px",
        "laptop": "1240px",
        "tablet": "768px",
        "smartphone": "425px"
    }
  } */
})