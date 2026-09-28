const texts = ["Nosotros", "Desarrollo personal integral"];

texts.forEach(function(element){
	if (element == texts[0]){
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'nosotros';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt1").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'nosotros-text';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt2").appendChild(paragraphElement);
	}
});

const texts1 = ["Nuestro objetivo es formar personas capaces de entender, transformar y comprometerse", "El Cebil es una Residencia Universitaria orientada al desarrollo integral de nuestros residentes. Por esa razón solemos decir que es mucho más que una pensión, ya que además del alojamiento, las comidas y la limpieza; ofrecemos un Proyecto Educativo dirigido a enriquecer su formación universitaria y prepararlos mejor para la vida profesional.","Este Proyecto abarca los aspectos profesional, cultural, humano y espiritual. Se orienta a formar personas con una marcada identidad, capaces de entender, transformar y comprometerse en la mejora de la sociedad. Por esta razón procuramos generar en la residencia un ambiente familiar, de amistad y comprensión, que facilite el desarrollo personal de cada uno.","La visión de la residencia está inspirada en el mensaje de San Josemaría Escrivá, fundador del Opus Dei. La búsqueda de Dios a través del estudio, el trabajo y las actividades ordinarias es para nosotros una idea fundamental. Sobre esta base, fomentamos una cultura de responsabilidad, trabajo bien hecho y compromiso con la sociedad."];

texts1.forEach(function(element){
	if (element == texts1[0]){
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item10';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt3").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item14';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt4").appendChild(paragraphElement);
	}
});