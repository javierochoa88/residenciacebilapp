const texts6 = ["Atención sacerdotal.","La formación espiritual del Cebil está confiada a la Prelatura del Opus Dei. Para conocer más sobre esta institución de la Iglesia Católica, te invitamos a visitar la página Web."]

texts6.forEach(function(element){
	if (element == texts6[0]){
		const paragraphElement6 = document.createElement("p");		
		paragraphElement6.className = "item12";
		paragraphElement6.appendChild(document.createTextNode(element));
		document.getElementById("bullets5").appendChild(paragraphElement6);
	} else {
		const paragraphElement6 = document.createElement("p");
		paragraphElement6.className='item11';
		paragraphElement6.appendChild(document.createTextNode(element));
		document.getElementById('bullets5').appendChild(paragraphElement6);
	}
});

/*Universitarios open a new tab*/
const btn2 = document.createElement("button");
btn2.className = "btn1"
const linkElement2 = document.createElement("a");
linkElement2.className = "item13";
btn2.appendChild(linkElement2);
btn2.innerHTML="Visitar";
document.getElementById("bullets5").appendChild(btn2);

btn2.addEventListener('click', () => {
  window.open('https://www.opusdei.org/es-ar/', '_blank');
});
