const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Looping through images */
for (let loop=1; loop<=5; loop++) {
const newImage = document.createElement ("img");
newImage.setAttribute("src", `images/pic${loop}.jpg`)
thumbBar.appendChild(newImage);
newImage.addEventListener('click',function(e) {
    displayedImage.setAttribute('src', newImage.getAttribute('src'));
  } );
}



