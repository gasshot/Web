import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. JSX의 특징
//import App from './App';
// 2. JSX 예제
import App from './AppExample2';

//import 별칭 from 경로

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
