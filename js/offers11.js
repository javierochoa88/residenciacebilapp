const imgElement = document.createElement("img");
imgElement.src = 'imgs/actividades.svg';
imgElement.alt = 'Actividades';
document.getElementById("img1").appendChild(imgElement);


const texts4 = ["Los estudiantes pueden acceder a las becas a partir del segundo año, de acuerdo a las notas y teniendo en cuenta que han comprendido la misión de la residencia. Aunque no participen en todas las actividades." ,"¿Cómo pedir una beca?","Aquí dejamos un enlace a través del cual se puede pedir una beca, a partir del segundo año."];


texts4.forEach(function(element){
	if (element == texts4[0]){
		const paragraphElement1 = document.createElement("p");		
		paragraphElement1.className = "item11";
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("txt3").appendChild(paragraphElement1);
	} else if (element == texts4[1]) {
		const paragraphElement1 = document.createElement("p");		
		paragraphElement1.className = "item12";
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("txt4").appendChild(paragraphElement1);
	} else {
		const paragraphElement1 = document.createElement("p");
		paragraphElement1.className='item11';
		paragraphElement1.appendChild(document.createTextNode(element));
		document.getElementById("txt4").appendChild(paragraphElement1);
}
});

/*Universitarios open a new tab*/
const btn = document.createElement("button");
btn.className = "btn1"
const linkElement = document.createElement("a");
linkElement.className = "item13";
btn.appendChild(linkElement);
btn.innerHTML="Solicitud de beca";
document.getElementById("txt4").appendChild(btn);

btn.addEventListener('click', () => {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScnrGQ1P9e4aW9HzhGlfqK5rhcam2vNFU4NAbHSz1_pAWfQ2A/viewform', '_blank');
});