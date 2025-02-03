import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import 명칭 from 경로

// ==============================[STEP 01. state 관리]===================================

// 01. useState의 개념과 react event 개념
//import App from './example/Ex01'
//import App from './example/Ex02'

// 03. MiniGame - 주사위게임!
// import App from './example/Ex03'

// 04. useState 랜덤게임
//import App from './example/Ex04'


// ==============================[STEP 02. map 함수 렌더링]===================================
// 05. map 함수
// import App from './example/Ex05'

// 06. map 함수 실습
import App from './example/Ex06'

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
