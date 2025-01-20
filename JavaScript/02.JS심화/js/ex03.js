// event => 특정요소에 이벤트 감지 시 실행할 로직을 부여해보자.
// ex) click, mouseover, mouseout, change
// on + 이벤트

// 요청 : 버튼들을 클릭 시, h1 태그 컨텐츠 값을 팝업창으로 띄워주겠다.
const popUp = () =>{
    let str = document.getElementById('txt').innerText
    alert('popup1 : ' + str)
}
const popUp2 = () =>{
    let str = document.getElementById('txt').innerText
    alert('popup2 : ' + str)
}

// Case 1. html 태그에 직접 이벤트를 작성하는 방법
// 태그 안에 on이벤트 = '함수이름()'을 넣어서 실행
// - 단점 : 함수명이 개발자모드에 노출, 하나의 요소당 하나의 이벤트만 처리 가능

// Case 2. EventHandler
// 하나의 요소당 하나의 이벤트만 부여 가능
// 요소.on이벤트 = 함수이름
// - 단점 : 하나의 이벤트만 처리 가능
let btn_han = document.getElementById('btn_han')
btn_han.onclick = popUp
btn_han.onclick = popUp2

// Case 3. EventListener
// 하나의 요소당 여러개의 이벤트 부여 가능
// 요소.addEventListener('이벤트',함수이름)

let btn_lis = document.getElementById('btn_lis')
btn_lis.addEventListener('click',popUp)
btn_lis.addEventListener('click',popUp2)

// **함수를 이름 없이 직접 등록
btn_lis.addEventListener('click',()=>{
    alert('직접 등록한 함수')
})


// Case 4. 이벤트 객체
// 이벤트가 발생하는 그 주체와 내용을 알 수 있다.
// 예를 들어, 사용자가 무슨 버튼을 눌렀는지 알고 싶을 때 사용

let btn_event = document.getElementById('btn_event')

btn_event.addEventListener('click',(이벤트)=>{
    console.log('이벤트 :', 이벤트.target)
})