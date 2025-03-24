import React from "react";

const Cards = ({ language }) => {
	const translations = {
		en: {
			title: "Projects",
			project1: "E-commerce Website",
			project2: "Portfolio Website",
			project3: "Task Management App",
		},
		es: {
			title: "Proyectos",
			project1: "Sitio Web de E-commerce",
			project2: "Sitio Web de Portafolio",
			project3: "Aplicación de Gestión de Tareas",
		},
	};

	return (
		<div className="container my-5">
			<h2 className="text-center mb-5" style={{ color: "inherit" }}>
				{translations[language].title}
			</h2>
			<div className="row g-4">
				{/* Project 1 */}
				<div className="col-12 col-md-4">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<h5 className="card-title">{translations[language].project1}</h5>
							<p className="card-text">
								{language === "en"
									? "An online store built with React and Node.js."
									: "Una tienda en línea construida con React y Node.js."}
							</p>
						</div>
					</div>
				</div>
				{/* Project 2 */}
				<div className="col-12 col-md-4">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<h5 className="card-title">{translations[language].project2}</h5>
							<p className="card-text">
								{language === "en"
									? "A personal portfolio showcasing my skills and projects."
									: "Un portafolio personal que muestra mis habilidades y proyectos."}
							</p>
						</div>
					</div>
				</div>
				{/* Project 3 */}
				<div className="col-12 col-md-4">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<h5 className="card-title">{translations[language].project3}</h5>
							<p className="card-text">
								{language === "en"
									? "A task management app to organize your daily activities."
									: "Una aplicación de gestión de tareas para organizar tus actividades diarias."}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
