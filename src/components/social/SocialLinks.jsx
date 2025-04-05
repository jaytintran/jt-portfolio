import {
	BiLogoLinkedinSquare,
	BiLogoMedium,
	BiLogoGithub,
} from "react-icons/bi";

const SocialLinks = ({ className }) => {
	const socialLinks = [
		{
			href: "https://www.linkedin.com/in/jaytin/",
			icon: <BiLogoLinkedinSquare />,
			label: "LinkedIn",
		},
		{
			href: "https://medium.com/@jaytin",
			icon: <BiLogoMedium />,
			label: "Medium",
		},
		{
			href: "https://github.com/jaytintran",
			icon: <BiLogoGithub />,
			label: "GitHub",
		},
	];

	return (
		<div className={className || "home__social"}>
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="social__link"
					aria-label={link.label}
				>
					{link.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
