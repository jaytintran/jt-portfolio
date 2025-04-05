"use client";

import {
	BiMoon,
	BiSun,
	BiBriefcase,
	BiEnvelope,
	BiHomeAlt,
	BiStar,
	BiUser,
} from "react-icons/bi";
import useScrollActive from "../hooks/useScrollActive";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const activeSection = useScrollActive(
		["home", "about", "skills", "work", "contact"],
		"home"
	);
	const { toggleTheme, isDarkTheme } = useTheme();

	const navLinks = [
		{ href: "#home", icon: <BiHomeAlt />, id: "home" },
		{ href: "#about", icon: <BiUser />, id: "about" },
		{ href: "#skills", icon: <BiStar />, id: "skills" },
		{ href: "#work", icon: <BiBriefcase />, id: "work" },
		{ href: "#contact", icon: <BiEnvelope />, id: "contact" },
	];

	return (
		<header className="header" id="header">
			<nav className="nav container">
				{/* LOGO */}
				<a href="#" className="nav__logo font-logo">
					Tin Tran
				</a>

				{/* MENU */}
				<div className="nav__menu">
					<ul className="nav__list">
						{navLinks.map((link) => (
							<li key={link.id} className="nav__item">
								<a
									href={link.href}
									className={`nav__link hover:!text-lime-300 ${
										activeSection === link.id ? "active-link" : ""
									}`}
									aria-label={link.id}
								>
									{link.icon}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* THEME BUTTON */}
				<button
					onClick={toggleTheme}
					className="theme-button"
					aria-label="Toggle theme"
				>
					{isDarkTheme ? <BiSun /> : <BiMoon />}
				</button>
			</nav>
		</header>
	);
};

export default Navbar;
