const texts2 = ["El funcionamiento de la Residencia se basa en la libertad y la responsabilidad de los residentes: los horarios de funcionamiento relativos a las comidas, al descanso y la seguridad de la casa, ayudan a los residentes a organizar sus horarios y a mejorar su rendimiento académico.","Actividades extrauniversitarias para quienes libremente lo deseen: la residencia ofrece ciclos de charlas y conferencias, clases de formación cristiana, actividades solidarias y capellanía universitaria. Estas actividades son un complemento que enriquece la formación universitaria.","Desde la Residencia se organiza además: deporte, excursiones y otras salidas para aprovechar el tiempo de descanso."];

const paragraphElement2 = document.createElement("ul");    
paragraphElement2.className = "custom-bullets";

texts2.forEach(function(element){
	const liElement2 = document.createElement("li");
    liElement2.className='item11';
    liElement2.appendChild(document.createTextNode(element));
    paragraphElement2.appendChild(liElement2);
    document.getElementById('txt3').appendChild(paragraphElement2);
});