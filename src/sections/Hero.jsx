import React from "react";
import Button from "../components/ui/Button";
import SocialLinks from "../components/ui/SocialLinks";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/pdfs/tin-thanh-tran-full-stack-developer-resume.pdf";

const Hero = () => {
	return (
		<main className="main">
			<section className="section" id="home">
				<div className="home container grid">
					<div className="home__data">
						<span className="home__greeting">Hello, I'm</span>
						<h1 className="home__name">Tin Tran</h1>
						<h3 className="home__title">Full Stack Developer</h3>

						<div className="home__buttons">
							<Button
								link={resume}
								label="Download CV"
								className="button--ghost"
								download
							/>
							<Button link="#about" label="About Me" />
						</div>
					</div>

					<div className="home__handle">
						<img src={profile} alt="Profile" className="home__img" />
					</div>

					<p className="home__description">
						Love to learn and implement technologies into work and life. Aim to
						create great and user-centered products. And embark myself on a
						journey of A.I and Machine Learning.
					</p>

					<SocialLinks />

					<a href="#about" className="home__scroll">
						<i className="bx bx-mouse home__scroll-icon"></i>
						<span className="home__scroll-name">Scroll Down</span>
					</a>
				</div>
			</section>
		</main>
	);
};

export default Hero;
