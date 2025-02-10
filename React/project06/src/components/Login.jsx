import React, { useState } from 'react'

const Login = () => {

    const [userID, setUserID] = useState('')
    const [userPW, setUserPW] = useState('')


    const getUserID = (income) =>{

        setUserID(income)

    }
    const getUserPW = (income) =>{

        setUserPW(income)

    }

    const loginFunc = ()=>{
        console.log(userID)
        console.log(userPW)
    }

    return (
        <div>
            <h1>절거운 React 수업</h1>
            <table>
                <tr><span>ID : <input type="text" onChange={(e)=>getUserID(e.target.value)}/></span></tr>
                <tr><span>PW : <input type="text" onChange={(e)=>getUserPW(e.target.value)}/><button onClick={loginFunc}>로그인 시도</button></span></tr>
            </table>
        </div>
    )
}

export default Login