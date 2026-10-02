const texts5 = ["Académicas","Clubes de carrera: reuniones con profesores o personalidades relacionadas a cada carrera para conseguir una visión práctica y real de la profesión extra-universidad. Hacer visitas a empresas o industrias afines.","Soporte académico: sala de estudios equipada, entrevistas periódicas con un profesional para asesoramiento sobre la gestión de la carrera universitaria."];

const paragraphElement5 = document.createElement('ul');    
paragraphElement5.className = 'custom-bullets';
texts5.forEach(function(element){
    if (element == texts5[0]){
        const liElement5 = document.createElement('h1');
        liElement5.className="item12";
        liElement5.appendChild(document.createTextNode(element));
        document.getElementById('bullets').appendChild(liElement5);
    } else {
        const liElement5 = document.createElement('li');
        liElement5.className='item11';
        liElement5.appendChild(document.createTextNode(element));
        paragraphElement5.appendChild(liElement5);
        document.getElementById('bullets').appendChild(paragraphElement5);
  }
});



