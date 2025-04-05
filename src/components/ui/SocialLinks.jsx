import {
	BiLogoLinkedinSquare,
	BiLogoMedium,
	BiLogoGithub,
} from "react-icons/bi";

const SocialLinks = () => {
	const socialLinks = [
		{
			href: "https://www.linkedin.com/in/jaytin/",
			icon: <BiLogoLinkedinSquare />,
		},
		{
			href: "https://medium.com/@jaytin",
			icon: <BiLogoMedium />,
		},
		{
			href: "https://github.com/jaytintran",
			icon: <BiLogoGithub />,
		},
	];

	return (
		<div className="home__social">
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="home__social-link"
				>
					{link.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
