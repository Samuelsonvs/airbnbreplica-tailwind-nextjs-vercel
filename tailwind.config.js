module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                mb: "450px",
                "3xl": "1760px",
            },
            borderRadius: {
                searchrounded: "32px",
            },
            flex: {
                flex2: "1.5 0 0%",
                flex3: "2.5 0 0%",
                flex4: "0.70 0 auto",
            },
            strokeWidth: {
                3: "3",
                4: "4",
            },
            lineHeight: {
                12: "3.5rem",
            },
            maxWidth: {
                mp: "18.5rem",
            },
            height: {
                18: "4.5rem",
            },
            gridTemplateColumns: {
                13: "repeat(2, calc(100% - 50px)) 100%",
            },
            width: {
                97: "31rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
