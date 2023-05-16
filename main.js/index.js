let tryAgain = document.querySelector('.try-again-container')
let start = document.querySelector('.start')
let timer = document.querySelector('.timer')
let bestScore = document.querySelector('.best-score-value')
let clickPerSecond = document.querySelector('.click-per-second-value')
let btnReverse = document.querySelector('.reverse-btn')
let contReverse = document.querySelector('.reverse-container')
let body = document.querySelector('body')
let contBestScore = document.querySelector('.best-score-container')
let contClickPerSecond = document.querySelector('.click-per-second-container')
let tryAgainBtn = document.querySelector('.try-again')
let btnReverseTwo = document.querySelector('.reverse-btn-two')



tryAgain.style.display = "none"
let clickPerSecondNumb = 0
let bestScoreNumb = Number(bestScore.textContent)
let count = 0
let timerValue = 10
let timerValue2 =timerValue
let idInterval
let result = 0


function reverse()
{
   btnReverse.style.left = "64px"
   body.style.backgroundColor = "#2c2323"
   contReverse.style.backgroundColor = "#d9caca"
   btnReverse.style.backgroundColor = "#2c2323"
   start.style.backgroundColor = "#5c3253"
   timer.style.color = "white"
   contBestScore.style.backgroundColor = "#29402e"
   contClickPerSecond.style.backgroundColor = "#29402e"
   tryAgain.style.backgroundColor = "#36706c"
   tryAgainBtn.style.backgroundColor = "#36706c"
   btnReverseTwo.style.backgroundColor = "#d9caca"


   btnReverse.removeEventListener('click', reverse)
   btnReverseTwo.removeEventListener('click', reverse)
   btnReverse.addEventListener('click', reverse2)
   btnReverseTwo.addEventListener('click', reverse2)
}

function reverse2()
{
   btnReverse.style.left = "4px"
   body.style.backgroundColor = ""
   contReverse.style.backgroundColor = ""
   btnReverse.style.backgroundColor = ""
   start.style.backgroundColor = ""
   timer.style.color = ""
   contBestScore.style.backgroundColor = ""
   contClickPerSecond.style.backgroundColor = ""
   tryAgain.style.backgroundColor = ""
   tryAgainBtn.style.backgroundColor = ""
   btnReverseTwo.style.backgroundColor = ""

   btnReverse.removeEventListener('click', reverse2)
   btnReverseTwo.removeEventListener('click', reverse2)
   btnReverse.addEventListener('click', reverse)
   btnReverseTwo.addEventListener('click', reverse)
}


function resetValues ()
{
    clickPerSecondNumb = 0
    bestScoreNumb = Number(bestScore.textContent)
    count = 0
    timerValue = 10
    timerValue2 =timerValue
    result = 0
    tryAgain.style.display = "none"
    start.textContent ="Start"
    timer.textContent = `${timerValue}`
    clickPerSecond.textContent = `${clickPerSecondNumb}`
    start.style.marginBottom = '150px'
}
btnReverse.addEventListener('click', reverse)
btnReverseTwo.addEventListener('click', reverse)

all()
function all()
{   
    start.addEventListener('click', onClickStart)
 function onClickStart()
 {
   start.removeEventListener('click', onClickStart)
   start.addEventListener('click', onClickGame)
   start.textContent = `${count}`
      idInterval = setInterval(() => {
         timerValue--
         timer.textContent = `${timerValue}`
         if(timerValue===0)
         {
            clearInterval(idInterval)
            start.removeEventListener('click', onClickGame)
            if(bestScoreNumb<=result)
            {
                bestScore.textContent = `${result}`
            }
            clickPerSecondNumb = result/timerValue2
            clickPerSecond.textContent = `${clickPerSecondNumb}`
            tryAgain.style.display = "block"
            start.style.marginBottom = '17px'
            return;
         }
         
         
         
      }, 1000)
 }


 resetValues()
 


 function onClickGame()
 {
    count++
    start.textContent = `${count}`
    result=count
 }
}


tryAgain.addEventListener('click', all)


 
