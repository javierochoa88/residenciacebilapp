const texts3 = ["Solicitá ahora tu plaza","Te invitamos a acercarte y conocer nuestras instalaciones. También podés dejar tus datos en la ficha de postulante, nos contactamos con vos y programamos una video conferencia. Para consultas hacé click aqui."]

texts3.forEach(function(element){
	if (element == texts3[0]){
		const paragraphElement = document.createElement("p");		
		paragraphElement.className = "item12";
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById("txt4").appendChild(paragraphElement);
	} else {
		const paragraphElement = document.createElement("p");
		paragraphElement.className='item11';
		paragraphElement.appendChild(document.createTextNode(element));
		document.getElementById('txt4').appendChild(paragraphElement);
	}
});

/*Ficha de postulante open a new tab*/
const btn2 = document.createElement("button");
btn2.className = "btn1"
const linkElement2 = document.createElement("a");
linkElement2.className = "item13";
btn2.appendChild(linkElement2);
btn2.innerHTML="Ficha de postulante";
document.getElementById("txt4").appendChild(btn2);

btn2.addEventListener('click', () => {
  window.open('https://docs.google.com/forms/d/1vyMhg6k9eGH7yfRgtC34rg3m9RIClbZNSsQXVZ8mvbE/viewform', '_blank');
});

const text4 = "Condiciones de admisión y más información";
const paragraphElement1 = document.createElement("p");		
paragraphElement1.className = "item12";
paragraphElement1.appendChild(document.createTextNode(text4));
document.getElementById("txt4").appendChild(paragraphElement1);

/* Alojamiento servicios open a new page */
const btn4 = document.createElement("button");
btn4.className = "btn1"
const linkElement3 = document.createElement("a");
linkElement3.className = "item13";
btn4.appendChild(linkElement3);
btn4.innerHTML="Descargar PDF";
document.getElementById("txt4").appendChild(btn4);

btn4.addEventListener('click', () => {
  window.open('docs/Residencia-Universitaria-Cebil-Servicios-que-brinda.pdf', '_blank');
});
