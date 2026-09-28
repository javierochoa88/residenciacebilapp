const myFigure1 = document.createElement("img");
myFigure1.src="imgs/cebil1.png";
myFigure1.className = "img1";
document.getElementById("myFig1").appendChild(myFigure1);

const texts7 = ["Ayacucho 685","En Tucumán, como en tu casa","San Miguel de Tucumán","Argentina – T4000INM","© Copyright 2005 – 2026","info@residenciacebil.org.ar"];

texts7.forEach( function(element) {
    const paragraphElement4 = document.createElement("p");
    paragraphElement4.className = 'item9';
    paragraphElement4.appendChild(document.createTextNode(element));
    document.getElementById("txt6").appendChild(paragraphElement4);
});

const paragraphElement = document.createElement("p");
const linkElement4 = document.createElement("a");
const myFigure2 = document.createElement("img");
myFigure2.src="imgs/instagram.jpg";
linkElement4.href ="https://www.instagram.com/residenciacebil";
linkElement4.appendChild(myFigure2);
paragraphElement.appendChild(linkElement4);
document.getElementById("myFig2").appendChild(paragraphElement);
