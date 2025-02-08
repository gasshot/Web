import React, { useState } from 'react'
import Buttons from './Buttons'
import Calendar from './Calendar';
import '../App.css';

const Main = () => {

    const [textValue, setTextValue] = useState('메인화면')



    return (
        <div>
            <div id='profile'>
                <span id='logo'>
                    <h2>savannah</h2>
                </span>
                <span >
                    <h1 id='welcome'>환영합네다. 김예은 수령님!(기획팀)</h1>
                </span>
                <span>
                    <img id='picture' src="" alt="ㅋㅋ" onClick={()=>console.log('프로파일 클릭 설정창')} />
                </span>

            </div>
            <div style={{ display: 'flex' }}>
                <div id='buttonGroup'>
                    <Buttons name={'메인'} func={() => { setTextValue(<Calendar />) }} />
                    <Buttons name={'작은달력'} func={() => { setTextValue('작은달력') }} />
                    <Buttons name={'할일'} func={() => { setTextValue('할 일') }} />
                    <Buttons name={'기능3'} func={() => { setTextValue('기능3') }} />
                    <Buttons name={'기능4'} func={() => { setTextValue('기능4') }} />
                    <Buttons name={'기능5'} func={() => { setTextValue('기능5') }} />
                    <Buttons name={'근태'} func={() => { setTextValue('근태') }} />
                    <Buttons name={'기능7'} func={() => { setTextValue('기능7') }} />
                </div>
                <div id='changableView'>
                    <div>
                        <h1>{textValue}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main