// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title')
var coverTagline = document.querySelector('.tagline')
console.log(coverImage)
console.log(coverTitle)
console.log(coverTagline)
//console.log(coverImage.outerHTML)



//coverImage.outerHTML = <img class="cover-image" src="./assets/prairie.jpg">
//coverImage.innerHTML = `<img>${'./assets/dance.jpg'}</img>`

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
coverImage.outerHTML = `<img class=\"cover-image\" src=\"${covers[getRandomIndex(covers)]}\">`
coverTitle.outerHTML = `<h2 class="cover-title">${titles[getRandomIndex(titles)]}</h2>`
coverTagline.outerHTML = `<h3 class="tagline">A tale of <span class="tagline-1">${descriptors[getRandomIndex(descriptors)]}</span> and <span class="tagline-2">${descriptors[getRandomIndex(descriptors)]}</span></h3>`


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
