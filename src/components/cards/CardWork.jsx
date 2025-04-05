import { BiGlobeAlt, BiLogoGithub } from "react-icons/bi";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";

const CardWork = ({ project }) => {
	const { title, imgSrc, liveLink, githubLink } = project;

	return (
		<div className="work__card">
			<img src={imgSrc} alt={title} className="work__img" />
			<h3 className="work__title">{title}</h3>
			<div className="work__buttons">
				<ButtonPrimary
					link={liveLink}
					label="Demo"
					className="work__button"
					icon={<BiGlobeAlt />}
				/>
				<ButtonSecondary
					link={githubLink}
					label="GitHub"
					className="work__button"
					icon={<BiLogoGithub />}
				/>
			</div>
		</div>
	);
};

export default CardWork;
