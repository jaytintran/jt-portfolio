import { useState } from "react";

const slides = [
	"Upcoming Project ⭐",
	"Sotask Development 🔧",
	"Webflow Client Site 💼",
	"Side Hustle Idea 💡",
];

export default function Bento() {
	const [current, setCurrent] = useState(0);

	return (
		<div className="container w-full !mt-6">
			{/* Bento Card */}
			<div className="relative">
				<div className="p-6 bg-[var(--container-color)] rounded-2xl shadow-lg h-[300px] flex items-center justify-center text-white text-xl font-semibold card-animation">
					{slides[current]}

					{/* Pagination Dots */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrent(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === current ? "bg-white scale-110" : "bg-white/40"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
