const texts3 = ["Compromiso solidario","Acompañamiento a enfermos hospitalizados y ancianos.","Catequesis y trabajos solidarios en barrios marginales.","Convivencias de trabajo solidario."];
texts3.forEach(function(element){
	if (element == texts3[0]){
		const paragraphElement3 = document.createElement("p");		
		paragraphElement3.className = "item12";
		paragraphElement3.appendChild(document.createTextNode(element));
		document.getElementById("bullets2").appendChild(paragraphElement3);
	} else {
		const paragraphElement3 = document.createElement("p");
		paragraphElement3.className='item11';
		const spanElement3 = document.createElement("span");
		spanElement3.innerHTML = "&#11208;";
		spanElement3.style.color='red';
		paragraphElement3.appendChild(spanElement3);
		paragraphElement3.appendChild(document.createTextNode(element));
		document.getElementById('bullets2').appendChild(paragraphElement3);
	}
});

/*Universitarios open a new tab*/
const btn = document.createElement("button");
btn.className = "btn1"
const linkElement = document.createElement("a");
linkElement.className = "item11";
btn.appendChild(linkElement);
btn.innerHTML="Mas info";
document.getElementById("bullets2").appendChild(btn);

btn.addEventListener('click', () => {
  window.open('https://www.universitarios.org.ar', '_blank');
});
