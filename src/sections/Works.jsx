import React, { useState } from "react";
import WorkCard from "../components/ui/WorkCard";
import projects from "../../src/constants/projects.js";

// Define filter tags
const FILTERS = ["all", "highlighted", "dev", "design"];

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
							: filter.charAt(0).toUpperCase() + filter.slice(1)}
					</span>
				))}
			</div>

			{/* Projects */}
			<div className="container  justify-center lg:justify-start grid md:grid-cols-2 lg:grid-cols-3">
				{filteredProjects.map((project, index) => (
					<WorkCard key={index} project={project} />
				))}
			</div>
		</section>
	);
};

export default Work;
