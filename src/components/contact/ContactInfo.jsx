import React from "react";
import {
	BiEnvelope,
	BiLogoGithub,
	BiLogoLinkedin,
	BiLogoLinkedinSquare,
	BiLogoTwitter,
} from "react-icons/bi";

const ContactInfo = ({ icon, title, subtitle, href }) => (
	<div className="contact__information flex gap-5">
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center"
			// className={`uil ${icon} contact__icon}
		>
			{icon === "linkedin" && <BiLogoLinkedinSquare size={50} />}
			{icon === "email" && <BiEnvelope size={50} />}
			{icon === "github" && <BiLogoGithub size={50} />}
			{icon === "twitter" && <BiLogoTwitter size={50} />}
		</a>
		<div>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="contact__title"
			>
				{title}
			</a>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="contact__subtitle"
			>
				{subtitle}
			</a>
		</div>
	</div>
);

export default ContactInfo;
