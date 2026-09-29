const texts2= ["Culturales","Biblioteca cultural: más de 1.500 libros de literatura variada a disposición de los residentes. Asesoramiento literario.","Reuniones con invitados, profesionales y especialistas de diversas áreas."," Conferencias, documentales, proyección de películas."];

texts2.forEach(function(element){
	if (element == texts2[0]){
		const paragraphElement2 = document.createElement("p");		
		paragraphElement2.className = "item12";
		paragraphElement2.appendChild(document.createTextNode(element));
		document.getElementById("bullets1").appendChild(paragraphElement2);
	} else {
		const paragraphElement2 = document.createElement("p");
		paragraphElement2.className='item11';
		const spanElement2 = document.createElement("span");
		spanElement2.innerHTML = '\u2BC8';
		spanElement2.style.color='red';
		paragraphElement2.appendChild(spanElement2);
		paragraphElement2.appendChild(document.createTextNode(element));
		document.getElementById("bullets1").appendChild(paragraphElement2);
	}
});

