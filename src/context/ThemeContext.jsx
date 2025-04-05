"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const ThemeContext = createContext();

// Theme options
export const THEMES = {
	LIGHT: "light",
	DARK: "dark",
};

// Theme provider component
export function ThemeProvider({ children }) {
	// Check if user has a saved theme preference
	const getSavedTheme = () => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme");
			return savedTheme || THEMES.DARK; // Default to dark theme
		}
		return THEMES.DARK;
	};

	const [theme, setTheme] = useState(getSavedTheme);

	// Toggle theme function
	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
		);
	};

	// Update localStorage and document class when theme changes
	useEffect(() => {
		if (typeof window !== "undefined") {
			// Save to localStorage
			localStorage.setItem("theme", theme);

			// Update document class
			document.documentElement.setAttribute("data-theme", theme);

			// Also add/remove dark class for Tailwind
			if (theme === THEMES.DARK) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, [theme]);

	// Context value
	const value = {
		theme,
		toggleTheme,
		isLightTheme: theme === THEMES.LIGHT,
		isDarkTheme: theme === THEMES.DARK,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

// Custom hook to use the theme context
export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
