import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //  screens:{
    //   'sm': '1px',   // Small screens (min-width: 1px)
    //   'md': '600px', // Medium screens (min-width: 600px)
    //   'lg': '1024px',// Large screens (min-width: 1024px)
    //   'xl': '1280px',// Extra large screens (min-width: 1280px)
    //   '2xl': '1536px',// 2x extra large screens (min-width: 1536px)
    // },
    extend: {
      colors: {
        'primary': '#133a5e',
        'secondry':'#475569',
        'secondary':'#ffb921'
      },
      
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    // styled: true,
    // themes: false, // لتعطيل الأنماط الافتراضية الخاصة بـ daisyUI
    // base: false, // لتعطيل الأنماط الأساسية التي تؤثر على الـ body
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    // darkTheme: "dark",
  },
}
