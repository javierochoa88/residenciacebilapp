const texts = ["Auditorio", "Nuestro objetivo es formar personas capaces de entender, transformar y comprometerse","La Residencia Cebil cuenta con un Salón Auditorio, donde se realizan distintas actividades académicas: cursos de posgrado, conferencias, seminarios, etc. El salón tiene una capacidad de 50 personas y está equipado con sonido y proyección multimedia."];

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
		paragraphElement.className = 'item14';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt2").appendChild(paragraphElement);
	}
});