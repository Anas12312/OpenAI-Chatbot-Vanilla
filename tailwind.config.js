export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        "main": ["main", "sans-serif"]
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}