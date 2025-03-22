import React from "react";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

const AboutMe = ({ language }) => {
	const translations = {
		en: {
			greeting: "Hello",
			intro: "I am",
			description: "Full Stack Developer, passionate about Frontend development.",
			downloadCV: "Download CV",
			contactMe: "Contact Me",
		},
		es: {
			greeting: "Hola",
			intro: "soy",
			description: "Desarrollador Full Stack, apasionado por el desarrollo Frontend.",
			downloadCV: "Descargar CV",
			contactMe: "Contáctame",
		},
	};

	const { greeting, intro, description, downloadCV, contactMe } = translations[language];

	return (
		<section
			className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
		>
			<h4 className="mb-2">
				{greeting}{" "}
				<span role="img" aria-label="wave">
						👋
				</span>
				, {intro}
			</h4>
			<h1
				className=""
				style={{
					background: "linear-gradient(90deg, #6a11cb, #2575fc)",
					WebkitBackgroundClip: "text",
					color: "transparent",
                    fontSize: "5rem",
                    fontFamily: "fantasy"
				}}
			>
				Stephan
			</h1>
			<h1
				className=""
				style={{
					background: "linear-gradient(90deg, #6a11cb, #2575fc)",
					WebkitBackgroundClip: "text",
					color: "transparent",
                    fontSize: "6rem",
                    fontFamily: "fantasy"
				}}
			>
				Jimenez
			</h1>
			<p className="mt-2 text-muted" style={{ color: "inherit" }}>
				{description}
			</p>
			<div className="mt-4">
				<a
					href="/cv.pdf"
					className="btn btn-lg btn-primary me-3"
					style={{ color: "inherit" }}
				>
					{downloadCV} <FaDownload />
				</a>
				<a
					href="#contacto"
					className="btn btn-lg btn-secondary"
					style={{ color: "inherit" }}
				>
					{contactMe} <FaPaperPlane />
				</a>
			</div>
		</section>
	);
};

export default AboutMe;
