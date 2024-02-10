/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    },
    screens:{
      '2xl':{'max':'1400px'},
      'xl':{'max':'1279px'},
      'lg':{'max':'1023px'},
      'md':{'max':'767px'},
      'cm':{'max':'639px'},
    }
  },
  plugins: []
};
