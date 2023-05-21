let body = document.querySelector('body')
let contReverse = document.querySelector('.reverse-container')
let btnReverse = document.querySelector('.reverse-btn')
let btnReverseTwo = document.querySelector('.reverse-btn-two')
let contBestScore = document.querySelector('.best-score-container')
let bestScore = document.querySelector('.best-score-value')
let timer = document.querySelector('.timer')
let start = document.querySelector('.start')
let tryAgain = document.querySelector('.try-again')
let contClickPerSecond = document.querySelector('.click-per-second-container')
let clickPerSecond = document.querySelector('.click-per-second-value')


if(body.clientWidth>1200)
{
   start.style.marginBottom = "180px"
   tryAgain.style.marginBottom = "83px"
}else{
   start.style.marginBottom = "120px"
   tryAgain.style.marginBottom = "43px"
}


let clickPerSecondNumb = 0
let bestScoreNumb = 0
let count = 0
let timerValue = 10
let idInterval
let result = 0

function reverse()
{
   btnReverse.classList.add("btn-bc")
   body.classList.add("body-bg")
   contReverse.classList.add("reverse2")
   btnReverseTwo.classList.add("reverse2")
   start.classList.add("start-bg")
   timer.classList.add("timer-color")
   contBestScore.classList.add("containers")
   contClickPerSecond.classList.add("containers")
   tryAgain.classList.add("try-again-btn")
   


   btnReverse.removeEventListener('click', reverse)
   btnReverseTwo.removeEventListener('click', reverse)
   btnReverse.addEventListener('click', reverse2)
   btnReverseTwo.addEventListener('click', reverse2)
}

function reverse2()
{
   btnReverse.classList.remove("btn-bc")
   body.classList.remove("body-bg")
   contReverse.classList.remove("reverse2")
   btnReverseTwo.classList.remove("reverse2")
   start.classList.remove("start-bg")
   timer.classList.remove("timer-color")
   contBestScore.classList.remove("containers")
   contClickPerSecond.classList.remove("containers")
   tryAgain.classList.remove("try-again-btn")

   btnReverse.removeEventListener('click', reverse2)
   btnReverseTwo.removeEventListener('click', reverse2)
   btnReverse.addEventListener('click', reverse)
   btnReverseTwo.addEventListener('click', reverse)
}


function resetValues ()
{
    clickPerSecondNumb = 0
    count = 0
    timerValue = 10
    result = 0
    tryAgain.style.display = "none"
    start.textContent ="Start"
    timer.textContent = `${timerValue}`
    clickPerSecond.textContent = `${clickPerSecondNumb}`
    if(body.clientWidth>1200)
    {
       start.style.marginBottom = "180px"
    }else{
    start.style.marginBottom = "120px"
    }
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
            clickPerSecondNumb = result/10
            clickPerSecond.textContent = `${clickPerSecondNumb}`
            tryAgain.style.display = "block"
            start.style.marginBottom = "17px"
            bestScoreNumb = result
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

