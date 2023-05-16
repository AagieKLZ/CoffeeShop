/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'coffee-50' : '#FFEDD8',
        'coffee-100' : '#F3D5B5',
        'coffee-200' : '#E7BC91',
        'coffee-300' : '#D4A276',
        'coffee-400' : '#BC8A5F',
        'coffee-500' : '#A47148',
        'coffee-600' : '#8B5E34',
        'coffee-700' : '#6F4518',
        'coffee-800' : '#603808',
        'coffee-900' : '#583101',

      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
