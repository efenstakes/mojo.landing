// Tailwind via PostCSS, so it works with `next build --webpack` (and Turbopack in dev).
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
