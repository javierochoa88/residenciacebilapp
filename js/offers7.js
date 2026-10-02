const texts8 = ["Tiempo libre y deporte","Actividades deportivas y excursiones."];

const paragraphElement8 = document.createElement("ul");    
paragraphElement8.className = "custom-bullets";
texts8.forEach(function(element){
  	if (element == texts8[0]){
        const liElement8 = document.createElement('h1');
        liElement8.className="item12";
        liElement8.appendChild(document.createTextNode(element));
        document.getElementById("bullets3").appendChild(liElement8);
	} else {
        const liElement8 = document.createElement("li");
        liElement8.className='item11';
        liElement8.appendChild(document.createTextNode(element));
        paragraphElement8.appendChild(liElement8);
        document.getElementById('bullets3').appendChild(paragraphElement8);
  }
});