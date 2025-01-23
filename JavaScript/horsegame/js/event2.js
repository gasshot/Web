let horse = null
let btnLeft = document.getElementsByClassName('btn left') //배열
let btnRight = document.getElementsByClassName('btn right')

let move = 0;

const moveLeft = () => {
    horse = document.getElementById('horse')
    // 말을 50px씩 이동시킨다 (단, 말은 배경을 벗어나지 않도록 한다.)
    // 말이 왼쪽으로 50px씩 이동
    //console.log('left 함수')
    horse.style.transform = 'scaleX(1)';

    if (move < 1200) {
        move += 50
        horse.style.right = move + 'px'
    }
}
const moveRight = () => {
    horse = document.getElementById('horse')
    //console.log('right 함수')
    horse.style.transform = 'scaleX(-1)';

    if (move >= 50) {
        move -= 50
        horse.style.right = move + 'px'
    }
}

btnLeft[0].addEventListener('click', () => {
    moveLeft()
})

btnRight[0].addEventListener('click', () => {
    moveRight()
})


// 추가기능 :  키보드로 방향키 조작하기


 let body = document.getElementsByTagName('body')[0]


 body.addEventListener('keydown', (e)=>{

    //console.log('키입력' , e.key)
    if(e.key === 'ArrowLeft'){
        moveLeft()
    }
    else if(e.key === 'ArrowRight'){
       moveRight()
    }
    else if (e.key === ''){
        document.getElementById('horse').animate([
            {bottom : '200px'},
            {bottom : '400px'},
            {bottom : '200px'}
        ],{duration : 700}) 

    }


    // 이벤트가 일어나는 대상을 알아야한다. => 이벤트 객체
 })