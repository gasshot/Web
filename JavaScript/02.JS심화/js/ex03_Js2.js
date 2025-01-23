// +1을 눌렀을 때 호출할 plus 함수
// 1-1. id가 number인 요소를 가져와서 num안에 담아주자. 
// 1-2. id가 number인 요소의 내용을 1 증가한 숫자로 대입시켜주자. (누적증감)
//  ** innerText로 가져온 값은 String형 -> number형태로 형변환 

const plus = (income) => {
    let outcome = ''
    let aa = parseInt(income) //1
    aa += 1 //2
    //income = aa.toString() // 2-> '2'
    console.log(`plus ck! 결과는 :${aa}`)

    outcome = aa.toString() //'2'
    return outcome
}

// -1을 눌렀을 때 호출할 minus함수를 생성하자. 
// 2-1. id가 number인 요소를 가져와서 num안에 담아주자.
// 2-2. id가 number인 요소의 내용을 1 감소한 숫자로 대입시켜주기 (누적증감)
//  ** innerText로 가져온 값은 String형 -> number형태로 형변환 
// 2-3. 단, 0 이하로는 내려가지 않도록 할 것! 

const minus = (income) => {
    let outcome = ''
    let bb = parseInt(income)
    if(bb > 0){
        bb -= 1 
        //income = bb.toString()
        console.log(`minus ck! 결과는 :${bb}`)
        outcome = bb.toString()
    }
    else{
        console.log('minus ck! 0이니까 멈춰')
        outcome = '0'
    }
    return outcome
}
// num2 = 4  - 정수형
// 'num2' - 스트링
let num = document.getElementById('number')
let btn1 = document.getElementById('plus')
let btn2 = document.getElementById('minus')
let btn3 = document.getElementById('reset')

btn1.addEventListener('click', () => {
    num.innerText = plus(num.innerText) // num.innerText = '2'
    // let aa = parseInt(h1Tag.innerHTML)
    // aa += 1 
    // h1Tag.innerHTML = aa
    // console.log(`plus ck! 결과는 :${aa}`)
    
})

btn2.addEventListener('click', () => {
    
    num.innerText = minus(num.innerText)

})

btn3.addEventListener('click', () => {
    
    num.innerText = '0'

})