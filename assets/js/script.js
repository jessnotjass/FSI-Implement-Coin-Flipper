// TODO: Declare any global variables we need
const buttonFlip = document.querySelector('#buttonFlip')
const buttonClear = document.querySelector('#buttonClear')
const coin = document.querySelector('#coin')
const tableScoreHeads = document.querySelector('#heads')
const tableScoreTails = document.querySelector('#tails')
const tablePercentHeads = document.querySelector('#heads-percent')
const tablePercentTails = document.querySelector('#tails-percent')
const messageContainer = document.querySelector('.message-container')

let scoreHeads = 0
let scoreTails = 0
let totalFlips = 0

const randomValue = () => (
    Math.random()
)

const getHeadsPercentage = () => (
    (scoreHeads / totalFlips) * 100
)

const getTailsPercentage = () => (
    (scoreTails / totalFlips) * 100
)

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler

        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    buttonFlip.addEventListener('click', () => {
        totalFlips++
        if (randomValue() < 0.5) {
            scoreTails++
            coin.src = './assets/images/penny-tails.jpg'
            coin.alt = 'Image of a coin on the tails side.'
            tableScoreTails.textContent = `${scoreTails}`
            messageContainer.textContent = 'You Flipped Tails!'
        } else {
            scoreHeads++
            coin.src = './assets/images/penny-heads.jpg'
            coin.alt = 'Image of a coin on the heads side.'
            tableScoreHeads.textContent = `${scoreHeads}`
            messageContainer.textContent = 'You Flipped Heads!'
        }        
        tablePercentTails.textContent = `${getTailsPercentage().toFixed(2)}%`
        tablePercentHeads.textContent = `${getHeadsPercentage().toFixed(2)}%`
    })

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    buttonClear.addEventListener('click', () => {
        scoreHeads = 0
        scoreTails = 0
        totalFlips = 0
        tableScoreTails.textContent = `${scoreTails}`
        tableScoreHeads.textContent = `${scoreHeads}`
        tablePercentTails.textContent = '0'
        tablePercentHeads.textContent = '0'
    })
})