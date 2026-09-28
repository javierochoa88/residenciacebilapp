const divElement = document.createElement('div');
divElement.className='logo';
const imgElement1 = document.createElement("img");
imgElement1.className='logo-cebil'
imgElement1.src = 'imgs/cebil1.png';
imgElement1.alt = 'Residencia Cebil';
divElement.appendChild(imgElement1);
document.getElementById("myheader").appendChild(divElement);


const texts9 = ["Mucho más que una residencia","En Tucumán, como en tu casa"];

texts9.forEach(function(element){
	if (element == texts9[0]){
		const divElement1 = document.createElement('div');
		divElement1.className ='alojamiento'
		const paragraphElement9 = document.createElement("h2");
		paragraphElement9.appendChild(document.createTextNode(element));
		divElement1.appendChild(paragraphElement9)
		document.getElementById("myheader").appendChild(divElement1);
	} else {
		const divElement1 = document.createElement('div');
		divElement1.className='welcome-text';
		const paragraphElement9 = document.createElement("h2");
		paragraphElement9.appendChild(document.createTextNode(element));
		divElement1.appendChild(paragraphElement9)
		document.getElementById("myheader").appendChild(divElement1);
	} 
});