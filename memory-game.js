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
  let cardCount = 1
  for (let color of colors) {
    let card = document.createElement('div')
    card.setAttribute('class', color)
    card.addEventListener('click', handleCardClick)
    card.setAttribute('id', `card${cardCount}`)
    card.classList.add('hiddenCard')
    gameBoard.appendChild(card)
    cardCount++
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  card.classList.remove('hiddenCard')
}

/** Flip a card face-down. */

function unFlipCard(card) {
  card.classList.add('hiddenCard')
  allowClick = true
}

/** Handle clicking on a card: this could be first-card or second-card. */
let clickCount = 0
let previousClickColor = ''
let previousClickId = ''
let matchCount = 0
let allowClick = true
const matchesToWin = 5
function handleCardClick(evt) {
  if (allowClick === false){
    return
  }
  allowClick = false
  let releaseLock = true
  clickCount++
  console.log(evt.target)
  let card = evt.target
    if (clickCount === 1){
      previousClickColor = card.getAttribute('class')
      console.log(previousClickColor)
      previousClickId = card.getAttribute('id')
      flipCard(card)
      console.log(card.getAttribute('class'))
    } else {
      if (previousClickId === card.getAttribute('id')){
        alert(`You cannot click on the same card more than once. Start again!`)
        unFlipCard(card)
      } else if (previousClickColor === card.getAttribute('class')){
        console.log('These two cards match.')
        flipCard(card)
        matchCount++
        console.log(matchCount)
      } else {
        flipCard(card)
        releaseLock = false
        setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, evt.target);
        setTimeout(unFlipCard, FOUND_MATCH_WAIT_MSECS, document.getElementById(`${previousClickId}`));
      }
      clickCount = 0
      previousClickColor = ''
      previousClickId = ''
    }
  if (matchCount === matchesToWin){
    setTimeout(() => { alert('YOU WIN THE GAME!') }, 100)
  }
  allowClick = releaseLock
}
