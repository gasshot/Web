import React, { useState } from 'react'
import Buttons from './Buttons'
import Calendar from './Calendar';
import '../App.css';

const Main = () => {

    const [textValue, setTextValue] = useState('메인화면')



    return (
        <div>
            <div>
                <span>
                    <h1 style={{ textAlign: 'right' }}>환영합네다. 김예은 수령님!</h1>
                    {/* <img  src="" alt="ㅋㅋ" /> */}
                </span>

            </div>
            <div style={{ display: 'flex' }}>
                <div id='buttonGroup'>
                    <Buttons name={'메인'} func={() => { setTextValue(<Calendar/>) }} />
                    <Buttons name={'작은달력'} func={() => { setTextValue('작은달력') }} />
                    <Buttons name={'기능2'} func={() => { setTextValue('기능2') }} />
                    <Buttons name={'기능3'} func={() => { setTextValue('기능3') }} />
                    <Buttons name={'기능4'} func={() => { setTextValue('기능4') }} />
                    <Buttons name={'기능5'} func={() => { setTextValue('기능5') }} />
                    <Buttons name={'기능6'} func={() => { setTextValue('기능6') }} />
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