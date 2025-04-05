import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Initialize theme from localStorage before rendering
const initializeTheme = () => {
	const savedTheme = localStorage.getItem("theme") || "dark";
	document.documentElement.setAttribute("data-theme", savedTheme);

	// Also add dark class for Tailwind if needed
	if (savedTheme === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

// Run theme initialization
initializeTheme();

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
