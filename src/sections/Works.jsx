import React, { useState } from "react";
import WorkCard from "../components/ui/WorkCard";
import projects from "../../src/constants/projects.js";
import BentoSlide from "../components/ui/BentoSlide";

// Define filter tags
const FILTERS = ["all", "highlighted", "front-end", "ux/ui"];

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("highlighted");

	// Filter projects based on type
	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.type === activeFilter);

	return (
		<section className="section" id="work">
			<span className="section__subtitle">My Work</span>
			<h2 className="section__title">Featured Projects</h2>

			{/* Filter */}
			<div className="work__filter">
				{FILTERS.map((filter) => (
					<span
						key={filter}
						className={`work__item ${
							activeFilter === filter ? "active-work" : ""
						}`}
						onClick={() => setActiveFilter(filter)}
					>
						{filter === "all"
							? "All"
							: filter === "front-end"
							? "Front-End"
							: filter === "ux/ui"
							? "UX/UI"
							: filter.charAt(0).toUpperCase() + filter.slice(1)}
					</span>
				))}
			</div>

			{/* Projects */}
			<div className="container justify-center lg:justify-start grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{filteredProjects.map((project, index) => (
					<WorkCard key={index} project={project} />
				))}
			</div>

			{/* Bento Grid */}
			{/* <div className="container w-full !mt-6">
				<div className="p-6 bg-[var(--container-color)] rounded-2xl shadow-lg h-[300px] flex items-center justify-center text-white text-xl font-semibold card-animation">
					Upcoming Project ⭐
				</div>
			</div> */}
			<BentoSlide />
		</section>
	);
};

export default Work;
