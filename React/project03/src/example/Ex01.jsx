import React, { useState } from 'react'
const Ex01 = () => {
    /* state : 컴포넌트 내부에서 관리되는 변경이 가능한 데이터
    => 변수와의 차이점
    => 변수는 값이 바뀌어도 화면이 같이 바뀌지 않는다.
    */
    /* React Event
        1. onclick ->  onClick
        2 .{함수이름} -> jsx 문법
        3. 이벤트 안에는 함수 형태의 값
            예) onClick ={함수이름} 
            예) onClick ={()=>{}}
        4. DOM요소에만 이벤트를 설정할 수 있다.
            => html태그에만 가능, 내가 만든 컴포넌트에는 x
    */
    // case 1) 변수사용

    let num = 0

    // case 2) state를 사용
    // const [변수이름, set변수이름] = useState(초기값)
    // 단, useState는 늘 import작업이 필요하다!

    const [num2, setNum2] = useState(0) // 배열 디스트럭처링
    const increase = () => {
        num++
        console.log('변수 num = ', num)
        // 변수로 처리하면 값은 바뀌지만 화면에 적용되지는 않는다.
        // 값이 바뀌자마자 화면도 같이 바뀌려면 변수 대신 state를 사용해야한다.
        setNum2(num2 + 1)
    }
    const decrease = () => {
        num--
        console.log('변수 num = ', num)
        // 변수로 처리하면 값은 바뀌지만 화면에 적용되지는 않는다.
        // 값이 바뀌자마자 화면도 같이 바뀌려면 변수 대신 state를 사용해야한다.
        setNum2(num2 - 1)
    }

    return (
        <div>
            <p>변수 = {num}</p>
            <p>state = {num2}</p>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>

    )
}

export default Ex01