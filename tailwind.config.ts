import type { Config } from 'tailwindcss';

const config: Config = {
      content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
      theme: {
            extend: {
                  colors: {
                        primary: '#31A2FF',
                        secondary: '#584857',
                        tertiary: '#584857',
                        'text-primary': '#000',
                        title: '#000000e3',
                        'text-secondary': '#929292',
                  },
                  backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                  },
                  container: {
                        center: true,
                        padding: '1rem',
                        screens: {
                              sm: '640px',
                              md: '768px',
                              lg: '1024px',
                              xl: '1280px',
                              '2xl': '1440px',
                        },
                  },
            },
      },
      plugins: [],
};
export default config;
