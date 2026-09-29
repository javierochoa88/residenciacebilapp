const texts2 = ["El funcionamiento de la Residencia se basa en la libertad y la responsabilidad de los residentes: los horarios de funcionamiento relativos a las comidas, al descanso y la seguridad de la casa, ayudan a los residentes a organizar sus horarios y a mejorar su rendimiento académico.","Actividades extrauniversitarias para quienes libremente lo deseen: la residencia ofrece ciclos de charlas y conferencias, clases de formación cristiana, actividades solidarias y capellanía universitaria. Estas actividades son un complemento que enriquece la formación universitaria.","Desde la Residencia se organiza además: deporte, excursiones y otras salidas para aprovechar el tiempo de descanso."];

texts2.forEach(function(element){
	const paragraphElement = document.createElement("p");
	paragraphElement.className='item11';
	const spanElement = document.createElement("span");
	spanElement.innerHTML = '\u2BC8';
	spanElement.style.color='red';
	paragraphElement.appendChild(spanElement);
	paragraphElement.appendChild(document.createTextNode(element));
	document.getElementById('txt3').appendChild(paragraphElement);
});