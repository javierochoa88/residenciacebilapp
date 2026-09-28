const texts4 = ["Tiempo libre y deporte","Actividades deportivas y excursiones."];

texts4.forEach(function(element){
	if (element == texts4[0]){
		const paragraphElement4 = document.createElement("p");		
		paragraphElement4.className = "item12";
		paragraphElement4.appendChild(document.createTextNode(element));
		document.getElementById("bullets3").appendChild(paragraphElement4);
	} else {
		const paragraphElement4 = document.createElement("p");
		paragraphElement4.className='item11';
		const spanElement4 = document.createElement("span");
		spanElement4.innerHTML = "\&#11208;";
		spanElement4.style.color='red';
		paragraphElement4.appendChild(spanElement4);
		paragraphElement4.appendChild(document.createTextNode(element));
		document.getElementById('bullets3').appendChild(paragraphElement4);
	}
});