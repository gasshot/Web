import React, { useEffect, useState } from 'react';
import data from '../json/members.json';

const TestOne = () => {
    const [wantedTim, setWantedTim] = useState([]); // 팀 데이터를 저장
    const [inputText, setInputText] = useState(""); // 사용자 입력 값 저장

    useEffect(() => {
    }, [inputText]);

    // 데이터 필터링 함수
    function getData(whatTim) {
        // JSON 데이터를 필터링하여 원하는 팀 멤버를 찾음
        let filteredData = data.result.filter(item => item.timName === whatTim)[0].members;

        console.log(filteredData)


        setWantedTim(filteredData); // 필터링된 데이터를 상태에 저장
    }

    const clickFuc = () =>{
        getData(inputText)

    }

    return (
        <div>
            <h1>인공지능 팀</h1>
            <table style={{ border: '1px solid black', width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>이름</th>
                        <th style={{ border: '1px solid black' }}>생년</th>
                        <th style={{ border: '1px solid black' }}>계급</th>
                    </tr>
                </thead>
                <tbody>
                    {wantedTim.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black' }}>{item.name}</td>
                            <td style={{ border: '1px solid black' }}>{item.birthYear}</td>
                            <td style={{ border: '1px solid black' }}>{item.rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input
                type="text"
                placeholder="팀명 입력 (예: 사바나)"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} // 입력 값을 상태에 저장
            />
            <button onClick={clickFuc}>불러오기</button>
        </div>
    );
};

export default TestOne;
