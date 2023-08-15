/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '200': '200px 1fr',
                '300': '300px 1fr',
                '3xauto': 'auto auto 1fr auto',
                '316': '316px 1fr 1fr 1fr auto',
                '200auto': '200px auto auto',
                '75-125': '75px 125px',
                '100-200': '100px 200px',
                '4x1': '1fr 1fr 1fr 1fr auto'
            }
        },
    },
    plugins: [
        require("daisyui")
    ],
}