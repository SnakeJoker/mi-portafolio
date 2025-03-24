// src/components/Header.js
import React from "react";
import assets from "../img";

const Header = ({ language, toggleLanguage, darkMode }) => {
	const translations = {
		en: {
			home: "Home",
			link: "Link",
			dropdown: "Dropdown",
			action: "Action",
			anotherAction: "Another action",
			somethingElse: "Something else here",
			disabled: "Disabled",
			search: "Search",
		},
		es: {
			home: "Inicio",
			link: "Enlace",
			dropdown: "Desplegable",
			action: "Acción",
			anotherAction: "Otra acción",
			somethingElse: "Algo más aquí",
			disabled: "Deshabilitado",
			search: "Buscar",
		},
	};

	return (
		<nav
			className={`navbar navbar-expand-lg ${
				darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
			}`}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={assets.img7} alt="LOL" width="150" height="40" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								{translations[language].home}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{translations[language].link}
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{translations[language].dropdown}
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										{translations[language].action}
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{translations[language].anotherAction}
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										{translations[language].somethingElse}
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" aria-disabled="true" href="#">
								{translations[language].disabled}
							</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder={translations[language].search}
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							{translations[language].search}
						</button>
					</form>
					<button className="language-toggle" onClick={toggleLanguage}>
						{language === "en" ? "ES" : "EN"}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
