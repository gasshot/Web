import React from 'react'
import { useState, useEffect } from 'react'
// useEffect : 함수형 컴포넌트에서 LifeCycle을 다룰 수 있는 리액트 훅
const MyEffect = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    function plus() {
        setNum1(num1 + 1)

    }

    //useEffect : Mount + Update
    // () => {} ---> 각생명주기에 실행시킬 함수

    useEffect(() => {
        if(num1 !== 0){ // 초기값이 아닐 때를 구분해준다
            console.log('Effect')
            if (num1 === 10) {
                alert('종료!')
            }
        }
    }) // num1이 수정되었을 때만 수행하게 함 => Mount + Update
    //  [] 비어있다면 -> Mount일 때만 실행하겠습니다!
    return (
        <div>
            <h1>{num1}</h1>
            <button onClick={plus}>PLUS</button>

            <h1>{num2}</h1>
            <button onClick={()=>setNum2(num2 + 2)}>PLUS</button>
        </div>
    )
}

export default MyEffect