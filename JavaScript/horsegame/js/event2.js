let horse = null
let btnLeft = document.getElementsByClassName('btn left') //배열
let btnRight = document.getElementsByClassName('btn right')

let move = 0;

const moveLeft = () => {
    horse = document.getElementById('horse')
    // 말을 50px씩 이동시킨다 (단, 말은 배경을 벗어나지 않도록 한다.)
    // 말이 왼쪽으로 50px씩 이동
    horse.style.transform = 'scaleX(1)';

    if (move < 1200) {
        move += 50
        horse.style.right = move + 'px'
    }
}
const moveRight = () => {
    horse = document.getElementById('horse')
    console.log('right 함수')
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