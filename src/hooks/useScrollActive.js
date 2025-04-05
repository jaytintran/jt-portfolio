"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to track active section based on scroll position
 * @param {Array} sections - Array of section IDs to track
 * @param {string} defaultActive - Default active section ID
 * @returns {string} - Currently active section ID
 */
function useScrollActive(sections = [], defaultActive = "") {
	const [activeSection, setActiveSection] = useState(defaultActive);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			// Find the current section based on scroll position
			const current = sections.find((sectionId) => {
				const section = document.getElementById(sectionId);
				if (!section) return false;

				const sectionTop = section.offsetTop - 100;
				const sectionHeight = section.offsetHeight;

				return scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
			});

			if (current) {
				setActiveSection(current);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Call once on mount to set initial active section
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [sections]);

	return activeSection;
}

export default useScrollActive;
