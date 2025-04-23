import { BiGlobeAlt, BiLogoGithub } from "react-icons/bi";

const WorkCard = ({ project }) => {
	const { title, imgSrc, liveLink, githubLink } = project;

	return (
		<div className="work__card !w-full lg:w-fit-content card-animation">
			<img src={imgSrc} alt={title} className="work__img !w-full" />
			<h3 className="work__title">{title}</h3>
			<div className="work__buttons">
				<a
					href={liveLink}
					className="work__button button"
					target="_blank"
					rel="noreferrer"
				>
					Demo <BiGlobeAlt />
				</a>
				<a
					href={githubLink}
					className="work__button button button--ghost"
					target="_blank"
					rel="noreferrer"
				>
					GitHub <BiLogoGithub />
				</a>
			</div>
		</div>
	);
};

export default WorkCard;
