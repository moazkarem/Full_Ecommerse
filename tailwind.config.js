import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
