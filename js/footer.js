const myFigure1 = document.createElement("img");
myFigure1.src="imgs/cebil1.png";
myFigure1.className = "img1";
document.getElementById("myFig1").appendChild(myFigure1);

const texts17 = ["Ayacucho 685","San Miguel de Tucumán","Argentina – T4000INM","© Copyright 2005 – 2026","info@residenciacebil.org.ar"];

texts17.forEach( function(element) {
    const paragraphElement14 = document.createElement("p");
    paragraphElement14.className = 'item9';
    paragraphElement14.appendChild(document.createTextNode(element));
    document.getElementById("txt6").appendChild(paragraphElement14);
});

const paragraphElement13 = document.createElement("p");
const linkElement14 = document.createElement("a");
const myFigure2 = document.createElement("img");
myFigure2.src="imgs/instagram.jpg";
linkElement14.href ="https://www.instagram.com/residenciaelcebil";
linkElement14.target = "_blank";
linkElement14.appendChild(myFigure2);
paragraphElement13.appendChild(linkElement14);
document.getElementById("myFig2").appendChild(paragraphElement13);
