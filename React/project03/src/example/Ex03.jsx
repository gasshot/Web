import React, { useState } from 'react';
import Board from '../components/Ex03Board'
import { Button } from 'react-bootstrap'

const Ex03 = () => {
    const [myDice, setMyDice] = useState(1)
    const [comDice, setComDice] = useState(1)
    const [result, setResult] = useState('')


    const makeRandom = () => {
        let ran = Math.floor((Math.random() * 6) + 1);	//1~6
        return ran;
    }

    const getResult = (income1, income2) => {
        if (income1 > income2) {
            return '승리'
        }
        else if (income1 < income2) {
            return '패배'
        }
        else if (income1 === income2) {
            return '무승부'
        }
    }

    const reset = () => {
        setMyDice(1)
        setComDice(1)
        setResult('')
    }

    const throwDice = () => {

        let mine = makeRandom() // 랜덤수
        let computer = makeRandom()

        //console.log('나의 숫자 : ',  mine)
        //console.log('컴퓨터의 숫자 : ',  computer)

        setMyDice(mine)
        setComDice(computer)
        setResult(getResult(mine, computer))

    }

    return (
        <div className="box" class='box' align = 'center'>
            <h1 id='title'>주사위게임</h1>
            <div>
                <Button variant="secondary" onClick={throwDice}>던지기!</Button>{" "}
                <Button variant="danger" onClick={reset}>RESET</Button>
            </div>
            <div className="board-container">
                <Board name={'나'} number={myDice} />
                <Board name={'컴퓨터'} number={comDice} />
            </div>

            <div>
                결과 : {result}
            </div>
        </div>
    );
};

export default Ex03;
