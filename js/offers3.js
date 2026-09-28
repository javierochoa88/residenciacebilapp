const texts = ["Actividades","Complementar tu formación","El Cebil te ofrece complementar tu formación universitaria en diversos ámbitos a través de las siguientes actividades:"];

texts.forEach(function(element){
	if (element == texts[0]){
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'nosotros';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("nobullets").appendChild(paragraphElement);
	} else if (element == texts[1]) {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'nosotros-text';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("nobullets").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item10';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("nobullets1").appendChild(paragraphElement);
	}
});