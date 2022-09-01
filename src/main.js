// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')
var showRandomButton = document.querySelector('.random-cover-button')
var makeNewButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover')
var makeNewForm = document.querySelector('.form-view')


// We've provided a few variables below
var savedCovers = [
  new Cover(covers[getRandomIndex(covers)], "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇
showRandomButton.addEventListener('click', showRandom)
// makeNewButton.addEventListener('click', makeNew)


// // Create your event handlers and other functions here 👇

function showRandom() {
  var coverArray = [
  covers[getRandomIndex(covers)],
  titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)],
  descriptors[getRandomIndex(descriptors)]
]
  var randomCover = new Cover(
    coverArray[0],
    coverArray[1],
    coverArray[2],
    coverArray[3]
  )
  coverImage.src = coverArray[0]
  coverTitle.innerText = coverArray[1]
  coverTagline1.innerText = coverArray[2]
  coverTagline2.innerText = coverArray[3]
  console.log(randomCover)
  return randomCover;
}




  // mainCover.style.visibility = 'hidden'
  // makeNewForm.style.visibility = 'visible'
  // document.getElementbyClassName('.main-cover').hidden = true;
  // document.getElementbyClassName('.view form-view').hidden = false;



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
showRandom()
