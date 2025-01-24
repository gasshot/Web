function AppExample2() {
    
    // 1. 현재 날짜를 가져온다.
    let today = new Date()
    console.log('today', today)
    //console.log('날짜 변경', today.toLocaleDateString())
    //console.log('월', today.getMonth() + 1)

    let small = today.toLocaleDateString()
    console.log(small[6])

    let climate = parseInt(today.getMonth() + 1)
    let result = ''

    if (climate >= 3 && climate < 6) {
        result = '봄';
    } else if (climate >= 6 && climate < 9) {
        result = '여름';
    } else if (climate >= 9 && climate < 12) {
        result = '가을';
    } else if (climate === 12 || climate === 1 || climate === 2) {
        result = '겨울';
    }
    else {
        result = '고장';
        console.log('고장입니다.')
        return
    }


    // 2. 조건에 따라 계절을 판별

    //35 봄 68여름 911 가을 12 1 2 겨울

    // 3. 결과창
    // h1 -> 2025.01.24
    // hr태그 (줄)
    // 지금은 겨울입니다. 좋은 하루보내세요
    return (
        <div>AppExample2
            <h1>{small}</h1>
            <hr></hr>
            <p>지금은 {result}입니다. 좋은하루보내세요!</p>
        </div>

    )
}
export default AppExample2;