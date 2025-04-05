import React from "react";

const ContactInput = ({ label, type, name, value, onChange }) => (
	<div className="contact__content">
		<label htmlFor={name} className="contact__label">
			{label}
		</label>
		<input
			type={type}
			className="contact__input"
			name={name}
			id={name}
			value={value}
			onChange={onChange}
		/>
	</div>
);

export default ContactInput;
