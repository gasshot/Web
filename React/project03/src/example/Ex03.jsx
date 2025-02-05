import React, { useEffect, useState } from 'react';
import Board from '../components/Ex03Board'
import { Button } from 'react-bootstrap'

const Ex03 = () => {
    const [myDice, setMyDice] = useState(1) // setState 함수
    const [comDice, setComDice] = useState(1)
    const [diceCount, setDiceCount] = useState(0)
    const [result, setResult] = useState('')
    const [myScore, setMyScore] = useState(0)
    const [comScore, setComScore] = useState(0)
    const [check, setCheck] = useState([false,'누구'])

    useEffect(() => {
        console.log("State or props updated");
        // 상태나 props 변화에 따른 작업 수행

if(check[0] === true){
    alert(`${check[1]} 이겼습니다!`)
    //reset()
}

    }, [check]); // 특정 값이 변경될 때만 실행
    const makeRandom = () => {
        let ran = Math.floor((Math.random() * 6) + 1);	//1~6
        return ran;
    }
    const getResult = (income1, income2) => {
        if (income1 > income2) {
            let kk = myScore
            setMyScore(kk + 1)
            if(kk + 1 >= 10){
                setCheck([true,'사용자가'])
            }
            return '승리'
        }
        else if (income1 < income2) {
            let kk = comScore
            setComScore(kk + 1)
            if(kk + 1 >= 10){
                setCheck([true,'COM'])
            }
            return '패배'
        }
        
        else if (income1 === income2) {
            return '무승부'
        }
    }

    const reset = () => {
        setMyDice(1)
        setComDice(1)
        setMyScore(0)
        setComScore(0)
        setDiceCount(0)
        setResult('')
        setCheck([false,''])
    }

    const throwDice = () => {

        let mine = makeRandom() // 랜덤수
        let computer = makeRandom()
        let count = diceCount
        setDiceCount(count + 1)
        setMyDice(mine)
        setComDice(computer)

        // if(myDice >comDice){
        //     let pp = myScore
        //     setMyScore(pp++)
        // }
        // else if(myDice < comDice){
        //     let cc = comScore
        //     setMyScore(cc++)
        // }
        // state 함수는 맨 마지막에 실행되기 때문에 다르게 접근해야한다.

        setResult(getResult(mine, computer))

    }

    return (
        <div className="box" class='box' align = 'center' >
            <h1 id='title'>주사위게임 {diceCount}회</h1>         
            <div>
                <Button variant="secondary" onClick={throwDice}>던지기!</Button>{" "}
                <Button variant="danger" onClick={reset}>RESET</Button>
            </div>
            <div className="board-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{margin : '10px'}}>
                    <Board name={'나'} number={myDice} />
                    <h1>UserScore : {myScore}</h1>
                </div>
                <div style={{margin : '10px'}}>
                    <Board name={'컴퓨터'} number={comDice} />
                    <h1>ComScore : {comScore}</h1>
                </div>

            </div>

            <div>
                결과 : {result}
            </div>

        </div>
    );
};

export default Ex03;
