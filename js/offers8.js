const texts19 = ["Espirituales","Cursos de doctrina cristiana.","Retiros espirituales y convivencias."];

const paragraphElement9 = document.createElement("ul");    
paragraphElement9.className = "custom-bullets";
texts19.forEach(function(element){
  if (element == texts19[0]){
    const liElement9 = document.createElement('h1');
    liElement9.className="item12";
    liElement9.appendChild(document.createTextNode(element));
    document.getElementById("bullets4").appendChild(liElement9);
	} else {
    const liElement9 = document.createElement("li");
    liElement9.className='item11';
    liElement9.appendChild(document.createTextNode(element));
    paragraphElement9.appendChild(liElement9);
    document.getElementById('bullets4').appendChild(paragraphElement9);
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
