/* eslint-disable no-unused-vars */
import { BiTrophy, BiWorld, BiBriefcase } from "react-icons/bi";
import Button from "../components/ui/Button";
import profileAlt from "../assets/images/about-alt.png";

const AboutBox = ({ icon: Icon, title, subtitle }) => {
	return (
		<div className="about__box flex flex-col items-center">
			<Icon className="about__icon" />
			<h3 className="about__title">{title}</h3>
			<span className="about__subtitle">{subtitle}</span>
		</div>
	);
};

const About = () => {
	return (
		<section className="section" id="about">
			<span className="section__subtitle">My Intro</span>
			<h2 className="section__title">About Me</h2>

			<div className="about container grid">
				<div className="about__data">
					<AboutBox
						icon={BiTrophy}
						title="Goal"
						subtitle="Become Software Developer"
					/>
					<AboutBox icon={BiWorld} title="Experience" subtitle="+2 Years" />
					<AboutBox
						icon={BiBriefcase}
						title="Projects Done"
						subtitle="+10 Completed"
					/>
				</div>

				<div className="about__info ">
					<img src={profileAlt} className="about__img" alt="About" />
					<div className="flex flex-col justify-between gap-10 items-center lg:items-start">
						<p className="about__description">
							I am a highly skilled full stack developer with over 2 years of
							experience in the industry. I specialize in React and have a
							strong proficiency in Next.js. <br />
							<br /> My passion for coding is matched by my love for physical
							fitness. In my free time, I enjoy practicing boxing and
							bodybuilding. I am also a multilingual speaker, fluent in French,
							English, and Vietnamese.
						</p>
						<Button
							link="#contact"
							label="Contact Me"
							className="max-w-[fit-content] mx-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
