const texts1 = ["Además de estos servicios, ¿qué te ofrece el Cebil?","El precio de la pensión es muy accesible para el servicio que se brinda, similar al que se paga por vivir en un departamento.","Dedicación total al estudio, ya que no necesitás cocinar, lavar o limpiar.","Un ambiente de amistad, distinto al de una pensión. Aquí los residentes se encuentran con amigos y compañeros, formando un ambiente agradable para estudiar y convivir.","La Residencia está ubicada a minutos de las principales facultades y a pocas cuadras del microcentro."];

const paragraphElement1 = document.createElement("ul");    
paragraphElement1.className = "custom-bullets";
texts1.forEach(function(element){
  if (element == texts1[0]){
    const liElement1 = document.createElement('p');
    liElement1.appendChild(document.createTextNode(element));
    liElement1.className="item10";
    document.getElementById("txt2").appendChild(liElement1);
  } else {
    const liElement1 = document.createElement("li");
    liElement1.className='item11';
    liElement1.appendChild(document.createTextNode(element));
    paragraphElement1.appendChild(liElement1);
    document.getElementById('txt2').appendChild(paragraphElement1);
  }
});
