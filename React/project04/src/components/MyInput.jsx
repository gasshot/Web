import React, { useState } from 'react'
import { useRef } from 'react'

// useRef : 컴포넌트 안에서 태그를 지정할 수 있는 기능


const MyInput = () => {
    const [inputData, setInputData] = useState('')
    const inputRef = useRef();



    function chInput1(income) {
        //console.log(document.getElementById('myText').value)
        setInputData(income)
    }
    function chInput2(){
        let data = inputRef.current.value
        //console.log(data)
        setInputData(data)
    }
    return (
        <div>
            <h1>{inputData}</h1>
            <input id='myText2' onChange={(e) => chInput1(e.target.value)}></input>
            {/* e: 이벤트 객체 */}
            {/* <input id='myText1' onChange={chInput2} ref={inputRef}></input> */}
        </div>
    )
}

export default MyInput