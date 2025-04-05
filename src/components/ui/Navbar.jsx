import { useState } from "react";
import {
	BiBriefcase,
	BiEnvelope,
	BiHomeAlt,
	BiStar,
	BiUser,
} from "react-icons/bi";

const Navbar = () => {
	const [active, setActive] = useState("#home");

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
				<a href="#" className="nav__logo">
					Tin Tran
				</a>

				{/* MENU */}
				<div className="nav__menu">
					<ul className="nav__list">
						{navLinks.map((link) => (
							<li key={link.id} className="nav__item">
								<a
									href={link.href}
									onClick={() => setActive(link.href)}
									className={`nav__link ${
										active === link.href ? "active-link" : ""
									}`}
								>
									{link.icon}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* THEME BUTTON - optional */}
				{/* <i className="bx bx-moon theme-button" id="theme-button"></i> */}
			</nav>
		</header>
	);
};

export default Navbar;
