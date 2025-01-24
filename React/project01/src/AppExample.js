function AppExample() {

    // 1. 사용자의 이름을 입력 받아준다.
    // 2. 만약 사용자의 이름이
    // 본인이름 : '관리자님 어서오세요'
    // 짝꿍이름 : '00야 반가워'
    // 그 외 : '반갑습니다. 다음에 다시 방문해세요.'
    let input = prompt('이름을 입력하세요. >>')
    let result = ""
    
    if (input === '강인오') {
        result = '관리자님 어서오세요'
    }
    else if (input === '전석현') {
        result = `${input[1]+input[2]}아 반가워`
        result = `${input-input[0]}아 반가워`
    }
    else {
        result = '반갑습니다. 다음에 다시 방문해세요.'
    }


    return (
        <div>AppExample
            <p>{result}</p>
        </div>

    )
}
export default AppExample;