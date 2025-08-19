let randomNumber = parseInt(Math.random()*100+1);
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlots = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p');
let prevGuess = []
let numGuess = 1;
let playgame = true;
if(playgame){
  submit.addEventListener('click' , (e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)) {
    alert('Ae raja akhiya me laanr pelal ba? Number de')
  }
  else if(guess <1){
    alert('bsdk likha hua hai ki 1 se 100 ke beech dena hai to maiya chudane ke liye likhta hai galat??')
  }
  else if(guess >100){
    alert('bsdk likha hua hai ki 1 se 100 ke beech dena hai to maiya chudane ke liye likhta hai galat??')
  }
  else {
    prevGuess.push(guess)
    if(numGuess===10) {
      displayGuess(guess)
      displayMessage(`Maa chudao nhi hua guess.. khel khtm. Random no. tha ${randomNumber}`)
      endGame();
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess===randomNumber) {
    displayMessage(`waah bhosdi shi hai`)
    endGame();
  }
  else if(guess<randomNumber){
    displayMessage(`laude bada bol`)
  }
  else if(guess>randomNumber){
    displayMessage(`laude chota bol`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlots.innerHTML+= `${guess}   `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML = `${message}`
}
function endGame()
{
  userInput.value= ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newgame">Start new game</h2>`
  startover.appendChild(p)
  playgame = false
  newGame();
}
function newGame(){
const newGameButton = document.querySelector('#newgame')
newGameButton.addEventListener('click',(e)=>{
  randomNumber =  parseInt(Math.random()*100+1);
  prevGuess = []
  numGuess=1
  guessSlots.innerHTML=''
  remaining.innerHTML =`10`
  userInput.removeAttribute('disabled')
  startover.removeChild(p)
  playgame=true;
})
}



