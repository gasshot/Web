import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useRef} from 'react'
//useNavigate : 주소값을 변경해주는 기능 
import { useContext } from 'react'
//useContext : 공유 저장소에 접근 기능
import { AppData } from '../App'
// 공유저장소 저장
// useNavigate : 주소값을 변경해주는 기능
const Login = () => {

    const shareDate = useContext(AppData)

    const idRef = useRef()
    const pwRef = useRef()
    const nav = useNavigate()

    function tryLogin() {

        // 1. 사용자가 입력한 ID, PW 값을 가지고 오기
        let id = idRef.current.value
        let pw = pwRef.current.value

        // 2. ID : smhrd, PW : 123 ==> 메인이동오기
        // console.log(id)
        // console.log(pw)

        if ((id === 'smhrd' && pw === '123') || (id === 'test' && pw === '456')) {
            shareDate.set(id)
            nav(`/?id=${id}`, {
                state: {
                    message: `${id}`,
                }
            }) // 메인 페이지로 돌아감
        }
        else {
            alert('다시입력해주세요!')
        }
    }

    const [userID, setUserID] = useState('')
    const [userPW, setUserPW] = useState('')


    const getUserID = (income) => {

        return
        setUserID(income)

    }
    const getUserPW = (income) => {
        return
        setUserPW(income)

    }

    return (
        <div>
            <h1>절거운 React 수업</h1>
            <span>ID : <input type="text" ref={idRef} onChange={(e) => getUserID(e.target.value)} /></span>
            <br />
            <span>PW : <input type="text" ref={pwRef} onChange={(e) => getUserPW(e.target.value)} /></span>
            <br />
            <button onClick={tryLogin}>로그인 시도</button>
        </div>
    )
}

export default Login