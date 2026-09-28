const texts = ["Becas", "Te pagamos el alojamiento por tus buenas notas","La Residencia Cebil posee un Programa de Becas y Ayudas que otorga la Asociación Cultural del Norte, entidad propietaria de la residencia. Están orientadas a aquellos universitarios con buen rendimiento académico que tengan necesidades económicas, y se trata de una bonificación en la pensión, que puede cubrir hasta el 35% del costo mensual de la misma.","La ayuda implica la realización de tareas compatibles con el estudio, y un compromiso de exigente profesionalidad. Los trabajos a realizar pueden ser la atención de la portería de la Residencia, la gestión de las bibliotecas y ayudas en las tareas del mantenimiento."];

texts.forEach(function(element){
	if (element == texts[0]){
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'nosotros';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt1").appendChild(paragraphElement);
	} else if (element == texts[1]) {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item10';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt1").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item11';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt2").appendChild(paragraphElement);
	}
});