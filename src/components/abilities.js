import React from "react";
import assets from "../img";

const Abilities = ({ language }) => {
	const translations = {
		en: {
			title: "Abilities",
			frontend: "FrontEnd",
			backend: "BackEnd",
			testing: "Testing",
			tools: "Tools",
		},
		es: {
			title: "Habilidades",
			frontend: "FrontEnd",
			backend: "BackEnd",
			testing: "Pruebas",
			tools: "Herramientas",
		},
	};

	return (
		<div className="container my-5">
			<h2 className="text-center mb-5" style={{ color: "inherit" }}>
				{translations[language].title}
			</h2>
			<div className="row g-4">
				{/* FrontEnd */}
				<div className="col-12 col-md-6">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<img
								src={assets.img1}
								alt="FrontEnd"
								width="120"
								height="120"
								className="mb-3"
							/>
							<h5 className="card-title">{translations[language].frontend}</h5>
							<div className="d-flex flex-wrap justify-content-center">
								<span className="m-1 SPST">ReactJS</span>
								<span className="m-1 SPST">Bootstrap</span>
								<span className="m-1 SPST">CSS3</span>
								<span className="m-1 SPST">HTML5</span>
								<span className="m-1 SPST">JavaScript</span>
							</div>
						</div>
					</div>
				</div>
				{/* BackEnd */}
				<div className="col-12 col-md-6">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<img
								src={assets.img3}
								alt="BackEnd"
								width="120"
								height="120"
								className="mb-3"
							/>
							<h5 className="card-title">{translations[language].backend}</h5>
							<div className="d-flex flex-wrap justify-content-center">
								<span className="m-1 SPST">Node.JS</span>
								<span className="m-1 SPST">Python</span>
								<span className="m-1 SPST">Java</span>
								<span className="m-1 SPST">MySQL</span>
								<span className="m-1 SPST">Express</span>
							</div>
						</div>
					</div>
				</div>
				{/* Testing */}
				<div className="col-12 col-md-6">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<img
								src={assets.img4}
								alt="Testing"
								width="120"
								height="120"
								className="mb-3"
							/>
							<h5 className="card-title">{translations[language].testing}</h5>
							<div className="d-flex flex-wrap justify-content-center">
								<span className="m-1 SPST">Jest</span>
								<span className="m-1 SPST">Mocha</span>
								<span className="m-1 SPST">Chai</span>
								<span className="m-1 SPST">Jasmine</span>
								<span className="m-1 SPST">Selenium</span>
								<span className="m-1 SPST">RTL</span>
							</div>
						</div>
					</div>
				</div>
				{/* Tools */}
				<div className="col-12 col-md-6">
					<div
						className="card border-0 text-center"
						style={{ backgroundColor: "inherit", color: "inherit" }}
					>
						<div className="card-body">
							<img
								src={assets.img2}
								alt="Tools"
								width="120"
								height="120"
								className="mb-3"
							/>
							<h5 className="card-title">{translations[language].tools}</h5>
							<div className="d-flex flex-wrap justify-content-center">
								<span className="m-1 SPST">GitHub</span>
								<span className="m-1 SPST">Git</span>
								<span className="m-1 SPST">Postman</span>
								<span className="m-1 SPST">GitLab</span>
								<span className="m-1 SPST">VS Code</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Abilities;
