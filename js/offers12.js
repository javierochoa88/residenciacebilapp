const texts = [
  "La residencia cuenta con cómodas instalaciones y el más completo servicio",
  "Una casa limpia y luminosa, con ambientes para todo.","Desayuno, almuerzo, merienda y cena.","Un ambiente de familia que te hará sentir como en casa.","Lavado semanal de tu ropa, las camisas planchadas y los vaqueros listos.","Cómodas habitaciones individuales y triples con amplios baños compartidos.","Todo lo necesario para concentrarte en el estudio: una biblioteca silenciosa y salas de estudio grupales.","Internet wi-fi, bibliografía universitaria de consulta."];

  texts.forEach(function(element){
  if (element == texts[0]){
    const paragraphElement = document.createElement("p");    
    paragraphElement.className = "item10";
    paragraphElement.appendChild(document.createTextNode(element));
    document.getElementById("txt").appendChild(paragraphElement);
  } else {
    const paragraphElement = document.createElement("p");
    paragraphElement.className='item11';
    const spanElement = document.createElement("span");
    spanElement.innerHTML = '\u2BC8';
    spanElement.style.color='red';
    paragraphElement.appendChild(spanElement);
    paragraphElement.appendChild(document.createTextNode(element));
    document.getElementById('txt1').appendChild(paragraphElement);
  }
});

