module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        options: {
            safelist: [
                'bg-green-200',
                'border-green-600',
                'bg-red-200',
                'sm:bg-gray-400',
                'sm:text-white',
                'sm:py-4',
                'sm:py-2',
                'sm:hidden',

            ]}
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'lg': { 'min': '769px' },

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
