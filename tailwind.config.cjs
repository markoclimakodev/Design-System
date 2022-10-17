/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'gray-900':'#121214',
      'gray-800':'#202024',
      'gray-400':'#7c7c8a',
      'gray-200':'#c4c4cc',
      'gray-100':'#e1e1e6',
      'cyan-500':'#61dafb',
      'cyan-300':'#9BE1FB',
      'blach':"#000000",
      'error':'#ff6060',
    },fontSize: {
      'xs': 14,
      'sm': 16,
      'md': 18,
      'lg': 20,
      'xl':24,
      '2xl':32
    }
    ,
      extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}