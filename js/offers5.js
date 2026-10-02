const texts6= ["Culturales","Biblioteca cultural: más de 1.500 libros de literatura variada a disposición de los residentes. Asesoramiento literario.","Reuniones con invitados, profesionales y especialistas de diversas áreas."," Conferencias, documentales, proyección de películas."];

const paragraphElement6 = document.createElement("ul");    
paragraphElement6.className = "custom-bullets";
texts6.forEach(function(element){
  	if (element == texts6[0]){
        const liElement6 = document.createElement('h1');
        liElement6.className="item12";
        liElement6.appendChild(document.createTextNode(element));
        document.getElementById("bullets1").appendChild(liElement6);
	} else {
        const liElement6 = document.createElement("li");
        liElement6.className='item11';
        liElement6.appendChild(document.createTextNode(element));
        paragraphElement6.appendChild(liElement6);
        document.getElementById('bullets1').appendChild(paragraphElement6);
  }
});
