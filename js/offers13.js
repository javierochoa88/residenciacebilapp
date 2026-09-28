const texts1 = ["Además de estos servicios, ¿qué te ofrece el Cebil?","El precio de la pensión es muy accesible para el servicio que se brinda, similar al que se paga por vivir en un departamento.","Dedicación total al estudio, ya que no necesitás cocinar, lavar o limpiar.","Un ambiente de amistad, distinto al de una pensión. Aquí los residentes se encuentran con amigos y compañeros, formando un ambiente agradable para estudiar y convivir.","La Residencia está ubicada a minutos de las principales facultades y a pocas cuadras del microcentro."];

  texts1.forEach(function(element){
  if (element == texts1[0]){
    const paragraphElement = document.createElement("p");    
    paragraphElement.className = "item10";
    paragraphElement.appendChild(document.createTextNode(element));
    document.getElementById("txt2").appendChild(paragraphElement);
  } else {
    const paragraphElement = document.createElement("p");
    paragraphElement.className='item11';
    const spanElement = document.createElement("span");
    spanElement.innerHTML = "&#11208;";
    spanElement.style.color='red';
    paragraphElement.appendChild(spanElement);
    paragraphElement.appendChild(document.createTextNode(element));
    document.getElementById('txt2').appendChild(paragraphElement);
  }
});
