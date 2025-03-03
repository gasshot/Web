import React, { useState } from 'react';
import Buttons from './Buttons';
import Calendar from './Calendar';
import '../App.css';

const Main = () => {

    const [textValue, setTextValue] = useState('메인화면');
    const check = true; // You can toggle this value to see the conditional rendering in action

    return (
        <div>
            <div id='profile'>
                <span id='logo'>
                    <h2>savannah</h2>
                </span>
                <span>
                    <h1 id='welcome'>환영합네다. 김예은 수령님!(관리자)</h1>
                </span>
                <span>
                    <img
                        id='picture'
                        src="" 
                        alt="ㅋㅋ"
                        onClick={() => console.log('프로파일 클릭 설정창')}
                    />
                </span>
            </div>
            <hr />
            <div style={{ display: 'flex' }}>
                <div id='buttonGroup'>
                    <Buttons name={'메인'} func={() => { setTextValue(<Calendar />); }} />
                    <Buttons name={'작은달력'} func={() => { setTextValue('작은달력'); }} />
                    <Buttons name={'할일'} func={() => { setTextValue('할 일'); }} />
                    <Buttons name={'(임시)때쓰기'} func={() => { setTextValue('기능3'); }} />
                    {/* <Buttons name={'(임시)삭제예정'} func={() => { setTextValue('기능4'); }} /> */}

                    {check && (
                        <>
                            <Buttons name={'스케줄 생성'} func={() => { setTextValue('스케줄 생성'); }} auth={true} />
                            <Buttons name={'관리하기'} func={() => { setTextValue('관리하기'); }} auth={true} />
                            <Buttons name={'통계 및 분석'} func={() => { setTextValue('통계 및 분석'); }} auth={true} />
                        </>
                    )}
                </div>
                <div id='changableView'>
                    <div>
                        <h1>{textValue}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
