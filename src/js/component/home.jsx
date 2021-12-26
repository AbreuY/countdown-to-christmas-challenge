import React from "react";

//include images into your bundle

import * as Snow from "../snow.js";
//create your first component
const Home = () => {
	window.onload = () => {
		//create new snow
		var snow = new Snow.default({
			id: "snow",
			theme: "colors",
			min_size: 1,
			max_size: 5,
		});
		snow.start();

		const title = document.querySelector("title");
		const christmasText = document.getElementById("mytext");

		const now = new Date();
		let year = now.getFullYear();

		if (now.getMonth() > 9) {
			year += 1;
		}

		const crhistmas = new Date(`December 24, ${year} 00:00:00`);
		const timeUntil = crhistmas.getTime() - now.getTime();
		const daysUntil = Math.abs(
			Math.ceil(timeUntil / (1000 * 60 * 60 * 24))
		);

		switch (daysUntil) {
			case 1:
				christmasText.setAttribute(
					"data-text",
					`La Navidad está a ${daysUntil} dia de distancia!`
				);
				christmasText.innerText = `La Navidad está a ${daysUntil} dia de distancia!`;
				title.innerHTML = ` Falta ${daysUntil} dia para Navidad!`;
				break;
			case 0:
				christmasText.setAttribute(
					"data-text",
					`¡Hoy es Navidad, Felices fiestas para todos ustedes!`
				);
				christmasText.innerText = `¡Hoy es Navidad, Felices fiestas para todos ustedes!`;
				title.innerHTML = "Siiii! hoy es Navidad!";
				break;
			default:
				christmasText.setAttribute(
					"data-text",
					`Faltan ${daysUntil} dias para Navidad!`
				);
				christmasText.innerText = `Faltan ${daysUntil} dias para Navidad!`;
				title.innerHTML = `${daysUntil} dias para Navidad!`;
				break;
		}
	};
	return (
		<>
			<div id="snow"></div>
			<div className="countdownBox">
				<span className="badge rounded-pill bg-text">
					<h5 className="animated" id="mytext" data-text="" />
				</span>
			</div>
		</>
	);
};

export default Home;
