import React from "react";
import assets from "../img";

const AboutMe2 = ({ language }) => {
	const translations = {
		en: {
			whoAmI: "Who I Am",
			aboutMe: "About Me",
			description1:
				"I am a web developer passionate about transforming ideas into digital solutions that make a difference. I focus on understanding your needs to deliver unique and personalized experiences.",
			description2:
				"I am constantly learning and strive to perfect every project, ensuring it meets your expectations and contributes to your success.",
			description3:
				"I am here to listen and accompany you on the path to your technological goals. Let's talk and discover how I can help you!",
		},
		es: {
			whoAmI: "Quién soy",
			aboutMe: "Sobre mí",
			description1:
				"Soy un desarrollador web apasionado por transformar ideas en soluciones digitales que marcan la diferencia. Me enfoco en comprender tus necesidades para ofrecer experiencias únicas y personalizadas.",
			description2:
				"Siempre estoy en constante aprendizaje y me esfuerzo por perfeccionar cada proyecto, asegurándome de que se ajuste a tus expectativas y contribuya a tu éxito.",
			description3:
				"Estoy aquí para escucharte y acompañarte en el camino hacia tus objetivos tecnológicos. ¡Hablemos y descubramos cómo puedo ayudarte!",
		},
	};

	const { whoAmI, aboutMe, description1, description2, description3 } =
		translations[language];

	return (
		<section className="container py-5">
			<div className="row align-items-center">
				{/* Image on the left */}
				<div className="col-md-4 text-center mb-5 mt-3">
					<img
						src={assets.img5} // Replace with your image
						alt="Profile"
						className="rounded-circle img-fluid"
						style={{ maxWidth: "180px" }}
					/>
				</div>

				{/* Text on the right */}
				<div className="col-md-8">
					<h6 className="text-muted text-uppercase">{whoAmI}</h6>
					<h2 className="fw-bold">{aboutMe}</h2>
					<p className="mt-3">{description1}</p>
					<p>{description2}</p>
					<p className="fst-italic">{description3}</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe2;
