import type { Config } from 'tailwindcss'
export default {
  content: ['./src/**/*.{ts,tsx}','./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { borderRadius: { '2xl': '1.25rem' } } },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
} satisfies Config
