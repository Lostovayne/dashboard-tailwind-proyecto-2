/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#0e1c25',
                    800: ' #262c38',
                    700: '#716e77',
                    600: '#547794',
                },
                blanco: '#fff',
            },
        },
    },
    plugins: [],
};
