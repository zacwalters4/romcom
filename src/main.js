// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title')
var coverTagline1 = document.querySelector('.tagline-1')
var coverTagline2 = document.querySelector('.tagline-2')
var showRandomButton = document.querySelector('.random-cover-button')
var makeNewButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover')
var makeNewForm = document.querySelector('.form-view')
var homeButton = document.querySelector('.home-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var savePage = document.querySelector('.saved-view')
var viewSaveButton = document.querySelector('.view-saved-button')
var savedCoversSection = document.querySelector('.saved-covers-section')
var createBookButton = document.querySelector('.create-new-book-button')


// We've provided a few variables below
var savedCovers = [
  new Cover(covers[getRandomIndex(covers)], "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;



// Add your event listeners here 👇
showRandomButton.addEventListener('click', showRandom)
makeNewButton.addEventListener('click', makeNew)
homeButton.addEventListener('click', goHome)
saveCoverButton.addEventListener('click', goSave)
viewSaveButton.addEventListener('click', goSave)
createBookButton.addEventListener('click', createNew)
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
  currentCover = randomCover
  return randomCover
}





// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeNew() {
  mainCover.classList.add("hidden");
  makeNewForm.classList.remove("hidden");
  showRandomButton.classList.add("hidden");
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
}

function goHome() {
  mainCover.classList.remove("hidden");
  makeNewForm.classList.add("hidden");
  showRandomButton.classList.remove("hidden");
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');

}

function goSave() {
  savePage.classList.remove("hidden");
  mainCover.classList.add("hidden");
  makeNewForm.classList.add("hidden");
  showRandomButton.classList.add("hidden");
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');

}

function createNew() {
  event.preventDefault()
  var coverInput = document.getElementById('cover').value
  var titleInput = document.getElementById('title').value
  var descriptorInput1 = document.getElementById('descriptor1').value
  var descriptorInput2 = document.getElementById('descriptor2').value

  mainCover.classList.remove("hidden");
  makeNewForm.classList.add("hidden");
  showRandomButton.classList.remove("hidden");
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');

  coverImage.src = coverInput
  coverTitle.innerText = titleInput
  coverTagline1.innerText = descriptorInput1
  coverTagline2.innerText = descriptorInput2

  var userCover = new Cover(coverInput, titleInput, descriptorInput1, descriptorInput2)
  var isDuplicate = false

  if(covers.includes(coverInput) === false) {
    covers.push(coverInput)
  }
  if(titles.includes(titleInput) === false) {
    titles.push(titleInput)
  }
  if(descriptors.includes(descriptorInput1) === false) {
    descriptors.push(descriptorInput1)
  }
  if(descriptors.includes(descriptorInput2) === false) {
    descriptors.push(descriptorInput2)
  }


  console.log(userCover)
  currentCover = userCover
  return userCover
}

showRandom()
