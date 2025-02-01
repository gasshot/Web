import React, { useState } from 'react'
// 1. 화면에 쓰일 준비물 state를 생각해보자 : myNum, ranNum
// 2. 버튼을 눌렀을 때 btnCk를 호출 => 버튼의 내용을 콘솔창에 출력해보기
// 3. 사용자 누른 그 숫자를 myNum에 세팅
// 4. ranNumdpsms 1~3까지 중 랜덤한 숫자 세팅
// 5. 리턴문에 안에 삼항연사나자

const Ex04 = () => {
    const [myNum, setMyNum] = useState(0);
    const [ranNum, setRanNum] = useState(0);
    const [result, setResult] = useState('');

    let numList = [1,2,3]


    // const click = (event) => {
    //     console.log(event.target)

    //     let mine = event.target
        
    //     console.log(mine.innerText)
    // }


    const btnCk = (index) => {
        // 함수 내용 입력
        console.log(index)

        setMyNum(index)

        let aa = parseInt(Math.random() * 3) + 1
        setRanNum(aa)


        let bb = index === aa ? '정답입니다.' : '땡!'

        setResult(bb)

    }


    return (
        <div>
            <div>
                {numList.map(item => <button onClick={() => btnCk(item)}>{item}</button> )}
                {/* <button onClick={click}>4</button> */}
            </div>

            <div>
                내가 입력한 숫자 : {myNum}
                <br />
                랜덤한 숫자 : {ranNum}
                <br />
                <p>{result}</p>

            </div>
        </div>
    )
}

export default Ex04