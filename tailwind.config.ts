import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#ffc0cb',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [{
  //     winter: {
  //       ...require('daisyui/src/theming/themes')['winter'],
  //       primary: 'pink',
  //       secondary: 'yellow',
  //       error: 'red',
  //     }
  //   }],
  //   base: true,
  //   styled: true,
  //   utils: true,
  //   logs: true,
  // }
}

export default config
