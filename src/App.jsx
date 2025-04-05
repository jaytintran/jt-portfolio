import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import "./App.css";

const App = () => {
	return (
		<ThemeProvider>
			<div className="main">
				<Navbar />
				<main>
					<Hero />
					<About />
					<Skills />
					<Works />
					<Contact />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
