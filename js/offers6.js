const texts7 = ["Compromiso solidario","Acompañamiento a enfermos hospitalizados y ancianos.","Catequesis y trabajos solidarios en barrios marginales.","Convivencias de trabajo solidario."];

const paragraphElement7 = document.createElement("ul");    
paragraphElement7.className = "custom-bullets";
texts7.forEach(function(element){
  if (element == texts7[0]){
    const liElement7 = document.createElement('h1');
    liElement7.className="item12";
    liElement7.appendChild(document.createTextNode(element));
    document.getElementById("bullets2").appendChild(liElement7);
	} else {
    const liElement7 = document.createElement("li");
    liElement7.className='item11';
    liElement7.appendChild(document.createTextNode(element));
    paragraphElement7.appendChild(liElement7);
    document.getElementById('bullets2').appendChild(paragraphElement7);
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
