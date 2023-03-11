/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main-background':"url('/background_Image/backgroundImage.png')",
        'authot-image': "url('/background_Image/rupesh_author.JPG')",
        'authot-note-bg': "url('/background_Image/author-note-bg.png')",
      }
    },
  },
  plugins: [],
}
