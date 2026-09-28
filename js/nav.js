const navtxt = [
  {
    "name":"Inicio",
    "link":"index.html"
  },
  {
    "name":"Alojamiento",
    "link":"alojamiento.html"
  },
  {
    "name": "Nosotros",
    "link":"nosotros.html"
  },
  {
    "name":"Actividades",
    "link":"actividades.html"
  },
  {
    "name":"Becas",
    "link": "becas.html"},
  {
    "name":"Auditorio",
    "link":"auditorio.html"
  }
];

navtxt.forEach(function(element){
  const navElement = document.createElement("a");
  navElement.href = element.link;
  navElement.innerHTML = element.name;
  document.getElementById("mynav").appendChild(navElement);

  navElement.addEventListener('click',() =>{
    window.location.href=navElement.href;
  });
});

