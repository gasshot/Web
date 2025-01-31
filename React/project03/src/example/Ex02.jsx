import React, { useState } from 'react'
import srcimg from '../img/img1.jpg'
const Ex02 = () => {

    const [like, setLike] = useState(false)
    const [heart, setHeart] = useState('♡')
    const [msg, setMsg] = useState(0)

    const handleLike = () => {
        console.log('ck')

        if (like === false) {
            setLike(true)
            setHeart('♥')
            setMsg(1)
        }
        else {
            setLike(false)
            setHeart('♡')
            setMsg(0)
        }
    }
    /* React에서 이미지 경로를 설정하는 방법 3가지
    
        1. 이미지 외부 주소
            - src = '주소값'
        2. src폴더에 이미지가 있다면?
        3. public 폴더에 이미지가 있다면?  
        - http://localhost:300/img/img1.jpg 
        - public 내에 이미지 파일을 보관하는 경우, 별도로 import 작성은 필요하지 않음
        - 왜 폴더는 서버와 통신중임
        - 이곳에 저장하는 것만으로도 고유한 주소가 생김 
    */

    // SNS의 좋아요 기능을 구현해보자!
    // 1. 빈 하트를 클릭시, 'handleLike' 라는 함수를 실행시켜보자 
    //    => 선행 : 함수 선언

    // 2. 비어있는 하트를 클릭시 
    //    빈 하트 => 꽉찬하트 / 0개 => 1개 
    //    => 화면도 바뀌어야하기때문에 변수가 아니라 state 

    // 3. 꽉찬 하트를 클릭 시
    //    꽉찬하트 => 빈하트 / 1개 => 0개 

    // 4. 다 된 사람들은 좋아요가 눌러진 화면 캡쳐 -> 업로드 
    return (
        <div>
            <img width='300px' src={srcimg} alt=''></img>
            <p>
                <span id='heart' onClick={handleLike}>{heart}</span>
                <span> 좋아요 {parseInt(msg)}개</span>
            </p>
        </div>
    )
}

export default Ex02