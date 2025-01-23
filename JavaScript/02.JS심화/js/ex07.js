let btn = document.getElementById('btn')
let container = document.getElementById('container')
let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=a857d7b734d71919ed1f7f1a98aa23d6&targetDt=20120101'
btn.addEventListener('click', () => {

    // 비동기 통신으로 데이터를 가져와보자.
    /* fetch
    - 장점 : JS 자체 내장 라이브러리, 별도의 설치 필요X
    - 단점 : 디테일한 설정이 부족함.
        (react에서는) 
    
    fetch(경로)
    .hen(res => res.json()) // 내가 가져온 응답 결과를 json형태로 파싱
    
    
    */

    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('데이터', res.boxOfficeResult.weeklyBoxOfficeList)
            let movieList = []
            movieList = res.boxOfficeResult.weeklyBoxOfficeList
            let code = "<table border = '1px solid black'>"

            for (let i = 0; i < movieList.length; i++) {

                code += `<tr>
                            <td>${movieList[i].rank}</td>
                            <td>${movieList[i].movieNm}</td>
                            <td>${movieList[i].openDt}</td>
                        </tr>`
            }


            code += '</table>'
            container.innerHTML = code
        })

})