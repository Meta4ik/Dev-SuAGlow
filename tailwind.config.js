/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
        './components/**/*.html',
        './navbar.js',
        './footer.js',
        './specials.js',
        './script.js',
    ],
    theme: {
        extend: {
            colors: {
                'taupe': '#8F857B',
                'blue-gray': '#9DAFB6',
                'charcoal': '#404345',
                'off-white': '#F6F7F8',
                'warm-gold': '#AA987C',
                'near-black': '#131619',
                'light-gray': '#DFE0DD',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'glow': '0 0 30px rgba(143, 133, 123, 0.3)',
            },
            fontFamily: {
                'heading': ['Montserrat', 'Poppins', 'sans-serif'],
                'body': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
