const texts = [
  "La residencia cuenta con cómodas instalaciones y el más completo servicio",
  "Una casa limpia y luminosa, con ambientes para todo.","Desayuno, almuerzo, merienda y cena.","Un ambiente de familia que te hará sentir como en casa.","Lavado semanal de tu ropa, las camisas planchadas y los vaqueros listos.","Cómodas habitaciones individuales y triples con amplios baños compartidos.","Todo lo necesario para concentrarte en el estudio: una biblioteca silenciosa y salas de estudio grupales.","Internet wi-fi, bibliografía universitaria de consulta."];

const paragraphElement = document.createElement("ul");    
paragraphElement.className = "custom-bullets";
texts.forEach(function(element){
  if (element == texts[0]){
    const liElement = document.createElement('p');
    liElement.appendChild(document.createTextNode(element));
    liElement.className="item10";
    document.getElementById("txt").appendChild(liElement);
  } else {
    const liElement = document.createElement("li");
    liElement.className='item11';
    liElement.appendChild(document.createTextNode(element));
    paragraphElement.appendChild(liElement);
    document.getElementById('txt1').appendChild(paragraphElement);
  }
});

