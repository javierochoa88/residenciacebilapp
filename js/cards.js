const texts2 = ["Te pagamos el alojamiento por tus buenas notas","El Cebil ofrece un programa de becas colaborativas para los buenos estudiantes. Hacé click en el botón para acceder a la solicitud."];


texts2.forEach( function(element) {
  if (element == texts2[0]){
    const paragraphElement2 = document.createElement("p");
    paragraphElement2.className = 'item1';
    paragraphElement2.appendChild(document.createTextNode(element));
    document.getElementById("txt3").appendChild(paragraphElement2);
  } else {
    const paragraphElement2 = document.createElement("p");
    paragraphElement2.className = 'item2';
    paragraphElement2.appendChild(document.createTextNode(element));
    document.getElementById("txt3").appendChild(paragraphElement2);
  } 
});

/*Inicio to Becas open a new tab*/
const btn2 = document.createElement("button");
btn2.className = "btn2"
const linkElement2 = document.createElement("a");
linkElement2.className = "item3";
btn2.appendChild(linkElement2);
btn2.innerHTML="Solicitá tu beca";
document.getElementById("txt3").appendChild(btn2);

btn2.addEventListener('click', () => {
  window.location.href='becas.html';
});

const texts3 = ["El mejor lugar para vivir. No dejes de escribirnos", "Te invitamos a acercarte y conocer nuestras instalaciones. Para consultas o coordinar una entrevista personal, hacé click en el siguiente link."];


texts3.forEach( function(element) {
  if (element == texts3[0]){
    const paragraphElement3 = document.createElement("p");
    paragraphElement3.className = 'item1';
    paragraphElement3.appendChild(document.createTextNode(element));
    document.getElementById("txt4").appendChild(paragraphElement3);
  } else {
    const paragraphElement3 = document.createElement("p");
    paragraphElement3.className = 'item2';
    paragraphElement3.appendChild(document.createTextNode(element));
    document.getElementById("txt4").appendChild(paragraphElement3);
  } 
});

/*Inicio to Becas open a new tab*/
const btn = document.createElement("button");
btn.className = "btn"
const linkElement1 = document.createElement("a");
linkElement1.className = "item3";
btn.appendChild(linkElement1);
btn.innerHTML="Contactanos";
document.getElementById("txt4").appendChild(btn);

btn.addEventListener('click', () => {
  window.open('https://docs.google.com/forms/d/16hFiLpwVZchcnecMdmuiEIg9BddOeOQd2xAE1L3mAdc/viewform', '_blank');
});

const texts4 = ["A pocos pasos de las principales facultades","Nuestra residencia está situada a pocas cuadras del microcentro, en un punto cercano a las principales facultades y otros lugares de interés de la ciudad."]

texts4.forEach( function(element) {
  if (element == texts4[0]){
    const paragraphElement4 = document.createElement("p");
    paragraphElement4.className = 'item1';
    paragraphElement4.appendChild(document.createTextNode(element));
    document.getElementById("txt5").appendChild(paragraphElement4);
  } else {
    const paragraphElement4 = document.createElement("p");
    paragraphElement4.className = 'item2';
    paragraphElement4.appendChild(document.createTextNode(element));
    document.getElementById("txt5").appendChild(paragraphElement4);
  } 
});

/*Inicio to Maps open a new tab*/
const btn5 = document.createElement("button");
btn5.className = "btn"
const linkElement5 = document.createElement("a");
linkElement5.className = "item3";
btn5.appendChild(linkElement5);
btn5.innerHTML="Ver Mapa";
document.getElementById("txt5").appendChild(btn5);

btn5.addEventListener('click', () => {
  window.open('https://maps.app.goo.gl/WHmUxeEtBnMH5Z7A8', '_blank');
});



