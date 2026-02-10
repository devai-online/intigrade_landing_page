/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#4A8B95", // Desaturated Teal
                "primary-hover": "#3a6e76",
                "primary-dark": "#4A8B95",
                "secondary": "#E6D5B8",

                "background-light": "#F7F5F0", // Creamy off-white
                "background-dark": "#1A1A1A", // Dark charcoal
                "surface-light": "#FFFFFF",
                "surface-dark": "#262626",
                "text-main-light": "#2D2D2D", // Soft charcoal
                "text-main-dark": "#E5E5E5",
                "text-sub-light": "#555555",
                "text-sub-dark": "#A3A3A3",
                "sage-light": "#8FBC8F",
                "sage-faint": "#E8F5E9",
            },
            fontFamily: {
                sans: ['"Neue Montreal"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                handwriting: ['"Caveat"', 'cursive'],
            },
            backgroundImage: {
                'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1.2s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'flow-down': 'flowDown 2s linear infinite',
                'scroll': 'scroll 30s linear infinite',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                flowDown: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '50%': { opacity: '0.5' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
