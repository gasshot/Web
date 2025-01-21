let h1Tag = document.getElementById('h1Tag')
let btn = document.getElementById('btn')

// 버튼을 클릭했을 때, h1 태그의 디자인을 수정 
btn.addEventListener('click', ()=>{
    console.log('클릭!')

    console.log(h1Tag.style)
    console.log(h1Tag.style.color)

    h1Tag.style.color = "green"
    console.log(h1Tag.style.color)

    // 요소.style.속성이름 = "값"
    // 주의점! camelCase로 입력할 것! 
    // ex) CSS 에서는  background-color 로 쓰이던 것이 
    //     JS에서는 backgroundColor로 써야한다! 

    h1Tag.style.backgroundColor = "lightyellow" // 배경 색상
    h1Tag.style.border = "1px solid black" // 경계선
    h1Tag.style.margin = "20px" // 외부 여백(시험)
    h1Tag.style.padding = "20px" // 내부 여백(시험)

    h1Tag.style.top = "500px" // 위에서부터 얼마나 떨어트릴것인가
    h1Tag.style.position = 'absolute'
})