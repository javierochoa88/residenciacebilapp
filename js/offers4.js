const texts1 = ["Académicas","Clubes de carrera: reuniones con profesores o personalidades relacionadas a cada carrera para conseguir una visión práctica y real de la profesión extra-universidad. Hacer visitas a empresas o industrias afines.","Soporte académico: sala de estudios equipada, entrevistas periódicas con un profesional para asesoramiento sobre la gestión de la carrera universitaria."];

texts1.forEach(function(element){
	if (element == texts1[0]){
		const paragraphElement1 = document.createElement("p");		
		paragraphElement1.className = "item12";
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("bullets").appendChild(paragraphElement1);
	} else {
		const paragraphElement1 = document.createElement("p");
		paragraphElement1.className='item11';
		const spanElement = document.createElement("span");
		spanElement.innerHTML = '\u2BC8';
		spanElement.style.color='red';
		paragraphElement1.appendChild(spanElement);
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("bullets").appendChild(paragraphElement1);
}
});



