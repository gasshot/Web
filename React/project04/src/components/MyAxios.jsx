import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'// 비동기 통신 라이브러리
const MyAxios = () => {
    // const activeButton = () => {
    //     getData(inputText)
    // }
    // const activeEnter = (e) => {
    //     if (e.key === "Enter") {
    //         activeButton();
    //     }
    // }

    const [outcome, setOutCome] = useState([])
    const [inputText, setInputText] = useState("");
    const inputRef = useRef();
    const [firstCheck, setFirstCheck] = useState(false);
    //20200101
    function getData(date) {

        // 영화데이터 가져오기---> axios
        // res는 Axios 통신이 성공했을 때 호출되는 콜백 함수에 전달되는 응답 객체
        // res.data: 서버로부터 전달받은 응답 데이터입니다. 주로 필요한 정보는 여기에서 추출됩니다.
        // res.status: HTTP 상태 코드 (예: 200, 404 등)를 나타냅니다.
        // res.statusText: 상태 코드에 대한 메시지 (예: "OK", "Not Found").
        // res.headers: 응답 헤더 정보.
        // res.config: Axios 요청에 사용된 설정 객체


        axios({
            // https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=19d4541a6600c594a5c2f6e2b0d6c8de&targetDt=20200101
            url: `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=dfe54a669ee316c31c4bcdf9b33b8a7f&targetDt=${date}`, // 통신을 시도할 주소
            method: "GET"
        })
            .then(res => {
                // res
                console.log('데이터', res.data);  // 응답 데이터가 res.data에 들어옴
                setOutCome(res.data.boxOfficeResult.dailyBoxOfficeList)
                alert("통신 성공!");

            })
            .catch(error => {
                console.error('통신 실패', error);
                alert("통신 실패!");
            });
        //then -> 통신 성공시 실행할 로직
    }

    useEffect(() => {
        if (!firstCheck) {
            setFirstCheck(true)
            getData('20200101')
            console.log('최초시작')
            return
        }
    }, [firstCheck])



    useEffect(() => {

        if (inputText.length === 8) {
            getData(inputText)
        }
    }, [inputText])

    return (
        <div>
            {/* <button onClick={() => getData('20200101')}>데이터 가져오기</button> */}

            <h1>연도별 영화 순위</h1>
            <table style={{ border: '1px solid black' }}>
                <tr>
                    <td style={{ border: '1px solid black' }}>영화순위</td>
                    <td style={{ border: '1px solid black' }}>제목</td>
                    <td style={{ border: '1px solid black' }}>개봉일</td>
                </tr>
                {outcome.map(item =>
                    <tr >
                        <td style={{ border: '1px solid black' }}>{item.rank}</td>
                        <td style={{ border: '1px solid black' }}>{item.movieNm}</td>
                        <td style={{ border: '1px solid black' }}>{item.openDt}</td>
                    </tr>

                )}

            </table>
            <input
                type="text"
                placeholder="text"
                onChange={(e) => setInputText(e.target.value)}
            />
            {/* <input ref = {inputRef} /> */}
        </div>
    )
}

export default MyAxios