import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import {AppData} from '../App.js'


const Main = () => {

    const shareDate = useContext(AppData)
    const [infinity, setInfinity] = useState('') // state 변수
    // useSearchParams 방식
    const [income, setIncome] = useSearchParams() // get방식
    const id = income.get('id');

    const jj = () => {
        if (id === 'smhrd') {
            //console.log('진입 ' + message);
            return <h2>스마트님 환영합니다!</h2>;
        } else if (id === 'test') {
            //console.log('진입 ' + message);
            return <h2>점심짜장님 환영합니다!</h2>;
        }
        return null; // 조건에 맞지 않으면 아무것도 반환하지 않음
    };


    // useLocation 방식
    const location = useLocation();
    const message = location.state?.message;

    const kk = () => {
        if (message === 'smhrd') {
            //console.log('진입 ' + message);
            return <h2>스마트님 환영합니다!</h2>;
        } else if (message === 'test') {
            //console.log('진입 ' + message);
            return <h2>점심짜장님 환영합니다!</h2>;
        }
        return null; // 조건에 맞지 않으면 아무것도 반환하지 않음
    };

    useEffect(() => {

        // 무한로딩 유발 지점
        setInfinity('무한로딩')
        console.log('이제 무한로딩1 안걸리지롱')

    },[]) // 마운트 단계에서만 수행



    return (
        <div>
            <h1>절거운 React 여기는 Main입니다.</h1>
            {jj()}
            <ul>
                <li>
                    <Link to="/login">로그인</Link>
                </li>
                <li>
                    <Link to="/join">회원가입</Link>
                </li>
                <li>
                    <Link to="/toDoList">ToDoList</Link>
                </li>
            </ul>
        </div>
    )
}

export default Main