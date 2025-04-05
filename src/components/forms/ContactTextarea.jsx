import React from "react";

const ContactTextarea = ({ label, name, value, onChange, rows = 7 }) => (
	<div className="contact__content">
		<label htmlFor={name} className="contact__label">
			{label}
		</label>
		<textarea
			id={name}
			name={name}
			cols="0"
			rows={rows}
			className="contact__input"
			value={value}
			onChange={onChange}
		/>
	</div>
);

export default ContactTextarea;
