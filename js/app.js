const titleDisplay = document.getElementById("typewriter")
const phrases = ["I'm Kianna.", "I love to code.", "I love to read."]
let i = 0
let j = 0

const widthMinumum = 1300
let currentWidth = window.innerWidth
let currentPhrase = [] //push letters into current array

let isDeleting = false
let isEnd = false // only tru at end of the string




function loop () {
    isEnd = false
    titleDisplay.innerHTML = currentPhrase.join('')

    if (currentWidth < widthMinumum) { //to keep smaller windows from having typewriter effect 
        titleDisplay.innerHTML = "I'm Kianna"
    }
        if (i < phrases.length && currentWidth >= widthMinumum) { //if i is less than the entire array

            if (!isDeleting && j <= phrases[i].length) { //if i is less than the entire string
                currentPhrase.push(phrases[i][j])
                j++
                titleDisplay.innerHTML = currentPhrase.join('')
            }

            if (isDeleting && j <= phrases[i].length) { //once we reach the end of the string
                currentPhrase.pop(phrases[i][j]) //take away letteres
                j--
                titleDisplay.innerHTML = currentPhrase.join('')
            } 

            if (j == phrases[i].length) {
                isEnd = true
                isDeleting = true
            }

            if (isDeleting && j === 0) {
                currentPhrase = [] //empty the array
                isDeleting = false
                i++ // add characters from next string

                if (i == phrases.length) {
                    i = 0 //so loop starts all over again
                }
            }

        } 

    const spedUp = Math.random() * (80-50) + 50 //get random number between 50 and 80
    const normalSpeed = Math.random() * (300-200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed //if we are at the end of the string, linger on the string for 2000 ms; if we are deleting a string, sped up the loop; if we are typing regularly, then keep loop at normal speed
    setTimeout(loop, time)
}

loop()