// 1.'디자인 바꾸기' 클릭 시, 배경은 검정색으로, 글씨는 흰색으로 변경
let bodyTag = document.getElementsByTagName('body')[0]
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.addEventListener('click', () => {
    console.log('btn1 ck!')

    bodyTag.style.backgroundColor = 'black'
    bodyTag.style.color = 'white'
})

// '원래대로 돌리기' 클릭 시, 배경은 다시 희색으로, 글씨는 파란색으로 변경

btn2.addEventListener('click', () => {
    console.log('btn2 ck!')
    bodyTag.style.backgroundColor = 'white'
    bodyTag.style.color = 'blue'
})