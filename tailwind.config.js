/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './blocks/**/*.liquid',
    './templates/**/*.{liquid,json}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        primary: 'var(--font-primary--family)',
      },
      spacing: {
        'page-margin': 'var(--page-margin)',
      },
      maxWidth: {
        'page': 'var(--page-width)',
      },
    },
  },
  plugins: [],
}
