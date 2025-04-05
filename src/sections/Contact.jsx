import React, { useState } from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactInput from "../components/forms/ContactInput";
import ContactTextarea from "../components/forms/ContactTextarea";
import emailjs from "@emailjs/browser";
import Toast from "../components/toaster/Toaster";
import { BiMailSend, BiSend } from "react-icons/bi";

// Toast Container Component
const ToastContainer = ({ toasts, removeToast }) => {
	return (
		<div className="toast-container">
			{toasts.map((toast) => (
				<Toast
					key={toast.id}
					message={toast.message}
					type={toast.type}
					onClose={() => removeToast(toast.id)}
				/>
			))}
		</div>
	);
};

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		projectTitle: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toasts, setToasts] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const addToast = (message, type) => {
		const id = Date.now();
		setToasts((prev) => [...prev, { id, message, type }]);

		// Auto-remove toast after 5 seconds
		if (type === "success") {
			setTimeout(() => {
				removeToast(id);
			}, 5000);
		} // Adjust the duration as needed
		setTimeout(() => {
			removeToast(id);
		}, 1000);
	};

	const removeToast = (id) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const serviceID = "service_b9vhlh9";
			const templateID = "template_qoa3hdj";
			const publicKey = "qyuU-UqOSE7i73Hjr";

			if (
				!formData.name ||
				!formData.email ||
				!formData.projectTitle ||
				!formData.message
			) {
				addToast("Please fill in all fields", "error");
				return;
			}

			await emailjs.send(
				serviceID,
				templateID,
				{
					from_name: formData.name,
					from_email: formData.email,
					project_title: formData.projectTitle,
					message: formData.message,
				},
				publicKey
			);

			addToast("Message sent successfully!", "success");
			setFormData({
				name: "",
				email: "",
				projectTitle: "",
				message: "",
			});
		} catch (error) {
			console.error("Failed to send message:", error);
			addToast("Failed to send message. Please try again.", "error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="section" id="contact">
			{/* Toast Container */}
			<ToastContainer toasts={toasts} removeToast={removeToast} />

			<span className="section__subtitle">Get In Touch</span>
			<h2 className="section__title">Working with Me</h2>

			<div className="contact container grid">
				<div className="contact__wrapper">
					<ContactInfo
						icon="linkedin"
						title="My Linkedin"
						subtitle="@jaytintran"
						href="https://linkedin.com/in/jaytintran"
					/>
					<ContactInfo
						icon="email"
						title="Email"
						subtitle="jaytintran@gmail.com"
						href="mailto:jaytintran@gmail.com"
					/>
					<ContactInfo
						icon="github"
						title="Gihub"
						subtitle="My Repositories"
						href="https://github.com/jaytintran/"
					/>
					<ContactInfo
						icon="twitter"
						title="Twitter"
						subtitle="Connect with Me on X"
						href="https://x.com/jaytintr"
					/>
				</div>

				<form onSubmit={handleSubmit} className="contact__form grid">
					<div className="contact__inputs grid">
						<ContactInput
							label="Name"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<ContactInput
							label="Email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<ContactInput
							label="Project Inquire"
							type="text"
							name="projectTitle"
							value={formData.projectTitle}
							onChange={handleChange}
							required
						/>
						<ContactTextarea
							label="Message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>

						<div>
							<button
								type="submit"
								className="button button--flex"
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<>
										<span className=" flex gap-1">
											<BiMailSend size={25} />
											Sending...
										</span>
									</>
								) : (
									<>
										<span className=" flex gap-1">
											<BiSend size={25} />
											Send Message
										</span>
									</>
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
