// components/Toast.js
import { useEffect } from "react";
import "./Toaster.css"; // You'll need to create this CSS file

const Toast = ({ message, type, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 5000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div className={`toast toast--${type}`}>
			<div className="toast__message">{message}</div>
			<button className="toast__close" onClick={onClose}>
				&times;
			</button>
		</div>
	);
};

export default Toast;
