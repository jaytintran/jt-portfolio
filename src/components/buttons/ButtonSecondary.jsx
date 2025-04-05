import React from "react";

const ButtonSecondary = ({ link, label, className, download, icon }) => {
	return (
		<a
			href={link}
			className={`button button--ghost ${className || ""}`}
			download={download}
			target={link.startsWith("http") ? "_blank" : undefined}
			rel={link.startsWith("http") ? "noreferrer" : undefined}
		>
			{label}
			{icon && <span className="button__icon">{icon}</span>}
		</a>
	);
};

export default ButtonSecondary;
