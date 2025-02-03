import React from 'react';

const Ex06Box = ({ title, birthyear, content, imgSrc, SNS }) => {
    return (
        <div
            style={{
                width: '300px', // 말의 크기 (원 크기)
                border: '1px solid black', // 테두리
                padding: '20px'
            }}
        >
            <img width="300px" height="400px" src={imgSrc} alt="" />
            <div>{title} {birthyear}년생</div>
            <p>{content}</p>
            <a
                href={SNS}
                style={{
                    display: 'block', // 블록으로 설정해 수평 정렬
                    textAlign: 'center', // 텍스트와 내용 가운데 정렬
                    marginTop: '10px', // 위쪽 여백 추가

                }}
            >
                <button style={{ width: '100px', height: '40px', color: 'white', backgroundColor: 'pink', border: '0px solid black', borderRadius: '10px' }}>Instagram</button>
            </a>
        </div>
    );
};

export default Ex06Box;