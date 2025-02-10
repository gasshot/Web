import React from 'react'
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div>
        <h1>절거운 React 수업</h1>
        <h1>여기는 홈페이지입니당</h1>
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