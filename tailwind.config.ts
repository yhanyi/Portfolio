import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: "class",
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                light: "#f1f5f9",
                dark: "#101827",
                primary: "#319795",
                primaryDark: "#81e6d9",
            }
        },
    },
    plugins: [
        ({ addBase }: any) => {
            addBase({
                // For WebKit browsers (Chrome, Safari)
                '::-webkit-scrollbar': {
                    display: 'none',
                },
                // For Firefox
                body: {
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                },
            });
        },

    ],
}
export default config
