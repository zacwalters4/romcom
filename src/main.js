// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')
var showRandomButton = document.querySelector('.random-cover-button')
showRandom()


// We've provided a few variables below
var savedCovers = [
  new Cover(covers[getRandomIndex(covers)], "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
showRandomButton.addEventListener('click', showRandom)
// // Create your event handlers and other functions here 👇
function showRandom() {
  coverImage.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  coverTagline1.innerText = descriptors[getRandomIndex(descriptors)]
  coverTagline2.innerText = descriptors[getRandomIndex(descriptors)]
  console.log(coverImage)
  console.log(coverTitle)
  console.log(coverTagline1)
  console.log(coverTagline2)
}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
