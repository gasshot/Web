import React, { useState } from 'react'
import usersList from '../json/users.json';



export const Join = () => {


    const[newUserID,setNewUserID] = useState('')
    const[newUserPW,setNewUserPW] = useState('')
    const[newUserNick,setNewUserNick] = useState('')



    const getNewUserID = (income) =>{

        setNewUserID(income)

    }
    const getNewUserPW = (income) =>{

        setNewUserPW(income)

    }
    const getNewUserNick = (income) =>{

        setNewUserNick(income)

    }

    const JoinFunc = ()=>{
        let currentList = usersList

        currentList.push({"id":newUserID,"password":newUserPW,"nickname":newUserNick}) //


        console.log(currentList)

        //currentList를 json화해서 ../json/users.json'경로의 파일에 덮어쓰려면?
    }

    return (
        <div>
            <h1>절거운 React 수업</h1>
            <h1>회원가입 페이지입니다</h1>
            <span>ID : <input type="text" onChange={(e)=>{getNewUserID(e.target.value)}} /></span>
            <br />
            <span>PW : <input type="text" onChange={(e)=>{getNewUserPW(e.target.value)}}/></span>
            <br />  
            <span>NICK : <input type="text" onChange={(e)=>{getNewUserNick(e.target.value)}}/></span>
            <br />
            <button onClick={JoinFunc}>JOIN</button>
            <button>초기화</button>
        </div>
    )
}
export default Join
