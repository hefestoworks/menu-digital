
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily:{
            'sans' : ['Lato', ...defaultTheme.fontFamily.sans],
            'serif' : ['Lora', ...defaultTheme.fontFamily.serif]
        },
        colors: {
         //Paleta modo claro
            "background-light": "#F9FAFB",   // Fondo claro
            "text-main-light": "#111827",    // Texto principal oscuro
            "primary-light": "#EAB308",      // Mantiene el dorado como acento
            "card-light": "#FFFFFF",

            //Modo oscuro
          '--background': '#111827', // Tu fondo gris oscuro
          'text-main': '#F9FAFB',     // El texto principal casi blanco
          'text-muted': '#9CA3AF',   // El texto secundario gris
          'primary': '#EAB308',      // Tu color de acento amarillo principal
          'card': '#1F2937',         // El color de fondo de las tarjetas
        },
      },
    },
    plugins: [],
  }
