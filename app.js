const squares =document.querySelectorAll('.square')
const mole =document.querySelector('.mole')
const timeLeft =document.querySelector('.time_left')
const score =document.querySelector('#score')
const restartButton = document.querySelector('#restart')


let result=0
let hitPosition
let currentTime =60
let timerId =null

function randomSquare(){

    squares.forEach(squares =>{
        squares.classList.remove('mole')
    })



    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition =randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
     
     timerId=setInterval(randomSquare ,500)
}

moveMole()


function countDown(){
    currentTime --
    timeLeft.textContent=currentTime

    if(currentTime ==0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER !  YOUR SCORE IS  : ' + result)
    }

}

let countDownTimerId =setInterval(countDown ,1000)

function restartGame(){
    clearInterval(timerId)
    clearInterval(countDownTimerId)

    result = 0
    currentTime = 60
    hitPosition = null

    score.textContent = result
    timeLeft.textContent = currentTime

    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    timerId = setInterval(randomSquare ,500)
    countDownTimerId = setInterval(countDown ,1000)
}

restartButton.addEventListener('click', restartGame)