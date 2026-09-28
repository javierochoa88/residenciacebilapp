const texts5 = ["Espirituales","Cursos de doctrina cristiana.","Retiros espirituales y convivencias."];

texts5.forEach(function(element){
	if (element == texts5[0]){
		const paragraphElement5 = document.createElement("p");		
		paragraphElement5.className = "item12";
		paragraphElement5.appendChild(document.createTextNode(element));
		document.getElementById("bullets4").appendChild(paragraphElement5);
	} else {
		const paragraphElement5 = document.createElement("p");
		paragraphElement5.className='item11';
		const spanElement5 = document.createElement("span");
		spanElement5.innerHTML = "&#11208;";
		spanElement5.style.color='red';
		paragraphElement5.appendChild(spanElement5);
		paragraphElement5.appendChild(document.createTextNode(element));
		document.getElementById('bullets4').appendChild(paragraphElement5);
	}
});

/*Calendario open a new tab*/
const btn3 = document.createElement("button");
btn3.className = "btn1"
const linkElement1 = document.createElement("a");
linkElement1.className = "item13";
btn3.appendChild(linkElement1);
btn3.innerHTML="Calendario";
document.getElementById("bullets4").appendChild(btn3);

btn3.addEventListener('click', () => {
  window.open('https://www.lagranja.org.ar', '_blank');
});
