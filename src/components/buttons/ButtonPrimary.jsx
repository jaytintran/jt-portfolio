import React from "react";

const ButtonPrimary = ({ link, label, className, download, icon }) => {
	return (
		<a
			href={link}
			className={`button ${className || ""}`}
			download={download}
			target={link.startsWith("http") ? "_blank" : undefined}
			rel={link.startsWith("http") ? "noreferrer" : undefined}
		>
			{label}
			{icon && <span className="button__icon">{icon}</span>}
		</a>
	);
};

export default ButtonPrimary;
