import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiRedux,
	SiGit,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPrisma,
	SiPostgresql,
	SiFirebase,
	SiPython,
} from "react-icons/si";

const SkillGroup = ({ skills, title }) => {
	return (
		<div className="bg-[#281515] !py-10 !px-10 rounded-xl w-full">
			<h3 className="text-sm uppercase !text-gray-400 !mb-4">{title}</h3>

			<div className="flex flex-wrap !gap-8 p-[1.5rem]">
				{skills.map((skill, index) => (
					<div
						className="min-w-[8.5rem] bg-dark-700 p-4 rounded-lg hover:bg-dark-600 transition-colors duration-200"
						key={index}
					>
						<div className="flex items-center gap-3">
							<skill.icon className="text-2xl text-primary-400" />
							<div className="flex flex-col">
								<h3 className="text-white font-medium text-base">
									{skill.name}
								</h3>
								<span className="text-gray-300 text-xs mt-1">
									{skill.level}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Skills = () => {
	const frontendSkills = [
		{ name: "HTML5", icon: SiHtml5, level: "Skillful" },
		{ name: "CSS3", icon: SiCss3, level: "Skillful" },
		{ name: "JavaScript", icon: SiJavascript, level: "Skillful" },
		{ name: "React.js", icon: SiReact, level: "Versatile" },
		{ name: "Next.js", icon: SiNextdotjs, level: "Versatile" },
		{ name: "TailwindCSS", icon: SiTailwindcss, level: "Versatile" },
		{ name: "TypeScript", icon: SiTypescript, level: "Familiar" },
		{ name: "Redux", icon: SiRedux, level: "Familiar" },
	];

	const backendSkills = [
		{ name: "Node.js", icon: SiNodedotjs, level: "Familiar" },
		{ name: "Express.js", icon: SiExpress, level: "Familiar" },
		{ name: "MongoDB", icon: SiMongodb, level: "Familiar" },
		{ name: "Prisma ORM", icon: SiPrisma, level: "Learning" },
		{ name: "PostgreSQL", icon: SiPostgresql, level: "Learning" },
		{ name: "Firebase", icon: SiFirebase, level: "Familiar" },
		{ name: "Git", icon: SiGit, level: "Versatile" },
		{ name: "Python", icon: SiPython, level: "Beginner" },
	];

	return (
		<section className="section" id="skills">
			<span className="section__subtitle">My Abilities</span>
			<h2 className="section__title">Skills</h2>

			<div className="skills container gap-5 flex flex-wrap lg:grid lg:grid-cols-2">
				<SkillGroup skills={frontendSkills} title="Frontend" />
				<SkillGroup skills={backendSkills} title="Backend & Tools" />
			</div>
		</section>
	);
};

export default Skills;
