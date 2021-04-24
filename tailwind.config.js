module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        options: { safelist: ['bg-green-200', 'border-green-600', 'bg-red-200']}
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'lg': { 'max': '1200px' },

            'sm': { 'max': '768px' },
        },
        listStyleType: {
            none: 'none',
            square: 'square'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
