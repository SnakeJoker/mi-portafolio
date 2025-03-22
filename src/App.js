import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Abilities from "./components/abilities";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import AboutMe2 from "./components/AboutMe2";
import "./App.css";

function App() {
	const [language, setLanguage] = useState("en");
	const [darkMode, setDarkMode] = useState(false);

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
	};

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<div className={darkMode ? "dark-mode" : "light-mode"}>
			<Header
				language={language}
				toggleLanguage={toggleLanguage}
				darkMode={darkMode}
			/>
			<AboutMe language={language} />
			<AboutMe2 language={language} />
			<Abilities language={language} />
			<Cards language={language} />
			<Footer language={language} />
			<button className="dark-mode-toggle" onClick={toggleDarkMode}>
				{darkMode ? "🌞" : "🌙"}
			</button>
		</div>
	);
}

export default App;
