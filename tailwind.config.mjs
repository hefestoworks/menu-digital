
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily:{
          fontFamily: {
            heading: ['Lora', 'serif'], // Para títulos principales
            body: ['Lato', 'sans-serif'], // Para textos secundarios y generales
          },
        },
        colors: {
          primary: '#EAB308', // Acento principal (mismo en ambos modos)
          secondary: '#9CA3AF', // Texto secundario
          card: {
            DEFAULT: '#FFFFFF', // Fondo tarjetas (modo claro)
            dark: '#1F2937', // Fondo tarjetas (modo oscuro)
          },
          text: {
            primary: {
              DEFAULT: '#111827', // Texto principal (modo claro)
              dark: '#F9FAFB', // Texto principal (modo oscuro)
            },
          },
          background: {
            DEFAULT: '#F9FAFB', // Fondo general (modo claro)
            dark: '#111827', // Fondo general (modo oscuro)
          },
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }
