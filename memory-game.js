"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - an click listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    //am I just creating the images here for each color
    //and setting attributes? do I "append" these, or will that
    //screw up the shuffle?
    if (color === 'red'){
      let redCard = document.createElement('div')
      redCard.setAttribute('class', 'red')
      let redCardImage = document.createElement('img')
      redCardImage.setAttribute('src', 'redCard.jpeg')
      redCardImage.setAttribute('class', 'red')
      redCard.appendChild(redCardImage)
      gameBoard.appendChild(redCard)
      redCard.addEventListener('click', handleCardClick)
    }
    if (color === 'blue'){
      let blueCard = document.createElement('div')
      blueCard.setAttribute('class', 'blue')
      let blueCardImage = document.createElement('img')
      blueCardImage.setAttribute('src', 'blueCard.png')
      blueCardImage.setAttribute('class', 'blue')
      blueCard.appendChild(blueCardImage)
      gameBoard.appendChild(blueCard)
      blueCard.addEventListener('click', handleCardClick)
    }
    if (color === 'green'){
      let greenCard = document.createElement('div')
      greenCard.setAttribute('class', 'green')
      let greenCardImage = document.createElement('img')
      greenCardImage.setAttribute('src', 'greenCard.png')
      greenCardImage.setAttribute('class', 'green')
      greenCard.appendChild(greenCardImage)
      gameBoard.appendChild(greenCard)
      greenCard.addEventListener('click', handleCardClick)
    }
    if (color === 'orange'){
      let orangeCard = document.createElement('div')
      orangeCard.setAttribute('class', 'orange')
      let orangeCardImage = document.createElement('img')
      orangeCardImage.setAttribute('src', 'orangeCard.png')
      orangeCardImage.setAttribute('class', 'orange')
      orangeCard.appendChild(orangeCardImage)
      gameBoard.appendChild(orangeCard)
      orangeCard.addEventListener('click', handleCardClick)
    }
    if (color === 'purple'){
      let purpleCard = document.createElement('div')
      purpleCard.setAttribute('class', 'purple')
      let purpleCardImage = document.createElement('img')
      purpleCardImage.setAttribute('src', 'purpleCard.png')
      purpleCardImage.setAttribute('class', 'purple')
      purpleCard.appendChild(purpleCardImage)
      gameBoard.appendChild(purpleCard)
      purpleCard.addEventListener('click', handleCardClick)
    }
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  //flip card if it is first click
  //flip card if it is second click
  //keep cards flipped if they match
}

/** Flip a card face-down. */

function unFlipCard(card) {
  //if it has been two clicks and the cards do not match, unflip to
    //hide faces of both cards

}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // on click - if it is first or second click, call flipCard dependent
    //on whether they match or not 
  //
  console.log(evt.target)
}
