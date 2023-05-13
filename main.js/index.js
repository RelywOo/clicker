let tryAgain = document.querySelector('.try-again-container')
let start = document.querySelector('.start')
let timer = document.querySelector('.timer')
let bestScore = document.querySelector('.best-score-value')
let clickPerSecond = document.querySelector('.click-per-second-value')


tryAgain.style.display = "none"
let clickPerSecondNumb = 0
let bestScoreNumb = Number(bestScore.textContent)
let count = 0
let timerValue = 10
let timerValue2 =timerValue
let idInterval
let result = 0

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
}


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


 
 








