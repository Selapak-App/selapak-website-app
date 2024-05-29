import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			backgroundImage: {
				jumboMarket:
					'url("https://www.atursaja.com/wp-content/uploads/2020/07/gambar-1-usaha-pinggir-jalan-kampung.png")',
				jumboShake:
					'url("https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/etika_bisnis_84a59b3f18/etika_bisnis_84a59b3f18.jpg")',
				jumboBuilding: 'url("/src/assets/bg-building.jpg")',
				ambassador: 'url("/src/assets/ambassador.png")',
			},
			padding: {
				container: "144px",
			},
			fontFamily: {
				poppins: ["Poppins", "ui-sans-serif"],
				raleway: ["Raleway", "ui-sans-serif"],
			},
			colors: {
				primary: "#387ADF",
				secondary: "#FBA834",
				accent: "#50C4ED",
				primaryDark: "#333A73",
				light: "#ffffff",
				dark: "#2f2d2d",
			},
		},
	},
	// important: true,
	plugins: [flowbite.plugin()],
};
