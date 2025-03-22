import React from "react";
import assets from "../img";

const AboutMe2 = () => {
	return (
		<section className="container py-5">
			<div className="row align-items-center">
				{/* Imagen a la izquierda */}
				<div className="col-md-4 text-center mb-5 mt-3">
					<img
						src={assets.img5} // Reemplaza con tu imagen
						alt="Perfil"
						className="rounded-circle img-fluid"
						style={{ maxWidth: "180px" }}
					/>
				</div>

				{/* Texto a la derecha */}
				<div className="col-md-8">
					<h6 className="text-muted text-uppercase">Quién soy</h6>
					<h2 className="fw-bold">Sobre mí</h2>
					<p className="mt-3">
						Soy un desarrollador web apasionado por transformar ideas en soluciones
						digitales que marcan la diferencia. Me enfoco en comprender tus
						necesidades para ofrecer experiencias únicas y personalizadas.
					</p>
					<p>
						Siempre estoy en constante aprendizaje y me esfuerzo por perfeccionar cada
						proyecto, asegurándome de que se ajuste a tus expectativas y contribuya a
						tu éxito.
					</p>
					<p className="fst-italic">
						Estoy aquí para escucharte y acompañarte en el camino hacia tus objetivos
						tecnológicos. ¡Hablemos y descubramos cómo puedo ayudarte!
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe2;
