const texts = ["El mejor lugar para vivir y estudiar","En Tucumán, como en tu casa"];

texts.forEach(function(element){
	if (element == texts[0]){
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item4';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className = 'item5';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt").appendChild(paragraphElement);
	} 
});

const texts1 = ["El Cebil es una Residencia Universitaria para varones, ubicada en la cercanía de varias facultades, que proporciona alojamiento para los estudiantes y promueve su formación humana, espiritual, social y cultural.","Desde hace más de 30 años ofrecemos un ámbito donde convivir y proyectar actividades al servicio de la comunidad universitaria y de la sociedad."];

texts1.forEach(function(element){
	if (element == texts1[0]){
		const paragraphElement1 = document.createElement("p");
		paragraphElement1.className = 'item6';
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("txt1").appendChild(paragraphElement1);
	} else {
		const paragraphElement1 = document.createElement("p");
		paragraphElement1.className = 'item7';
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("txt2").appendChild(paragraphElement1);
	}
});

/*Inicio to Alojamiento open a new tab*/
const btn1 = document.createElement("button");
btn1.className = "btn1"
const linkElement = document.createElement("a");
linkElement.className = "item8";
btn1.appendChild(linkElement);
btn1.innerHTML="Seguir leyendo";
document.getElementById("txt2").appendChild(btn1);

btn1.addEventListener('click', () => {
  window.location.href='alojamiento.html';
});



