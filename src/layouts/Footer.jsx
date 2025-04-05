import React from "react";
import SocialLinks from "../components/social/SocialLinks";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer class="footer ">
			<section class="container">
				<div className="flex flex-row items-center justify-between">
					<h1 class="!text-black uppercase text-xl !font-normal">Tin Tran</h1>

					<ul class="flex gap-7 items-center">
						<li>
							<a href="#about" class="footer__link">
								About
							</a>
						</li>
						<li>
							<a href="#work" class="footer__link">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" class="footer__link">
								Contact
							</a>
						</li>
					</ul>

					{/* <ul class="footer__social">
						<li>
							<a
								href="http://m.me/jaytintr"
								target="_blank"
								class="footer__social-link bx bxl-messenger"
							></a>
						</li>
						<li>
							<a
								href="mailto:jaytintran@gmail.com"
								target="_blank"
								class="footer__social-link bx bx-mail-send"
							></a>
						</li>
						<li>
							<a
								href="https://wa.me/+84582419642"
								target="_blank"
								class="footer__social-link bx bxl-whatsapp"
							></a>
						</li>
					</ul> */}
				</div>
				<span className="footer__copy">
					&#169; {currentYear} Tin Tran. All rights reserved.
				</span>
			</section>
		</footer>
	);
};

export default Footer;
