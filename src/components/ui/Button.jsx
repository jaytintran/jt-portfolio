import React from "react";

const Button = ({ link, label, className, download }) => {
	return (
		<a href={link} className={`button ${className}`} download={download}>
			{label}
		</a>
	);
};

export default Button;
