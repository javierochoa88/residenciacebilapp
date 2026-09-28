/*
Define an index variable that lets us keep track of which image is currently being displayed.
Declare the displayImages() function.
Define the displayImages() function.
Select all the elements with the image class and store them in an images array.
Loop through all the elements in images and hide them by setting their display style to “none.”
Increment index by one and make sure that it stays within the range of 3 (the number of images).
Display only one image by setting its display style to “block.”
Call the displayImages() function using the setTimeout() function, which will execute the function after a 2,000 millisecond (2 seconds) delay.
*/
let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
