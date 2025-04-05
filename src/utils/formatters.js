/**
 * Formats a date to a readable string
 * @param {Date|string} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export function formatDate(date, options = {}) {
	const defaultOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		...options,
	};

	const dateObj = date instanceof Date ? date : new Date(date);
	return new Intl.DateTimeFormat("en-US", defaultOptions).format(dateObj);
}

/**
 * Truncates text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength = 100) {
	if (!text || text.length <= maxLength) return text;
	return `${text.slice(0, maxLength)}...`;
}

/**
 * Formats a number with commas
 * @param {number} number - Number to format
 * @returns {string} - Formatted number
 */
export function formatNumber(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Converts kebab-case to camelCase
 * @param {string} str - String to convert
 * @returns {string} - Converted string
 */
export function kebabToCamel(str) {
	return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Converts camelCase to kebab-case
 * @param {string} str - String to convert
 * @returns {string} - Converted string
 */
export function camelToKebab(str) {
	return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
