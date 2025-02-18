const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

// app이라는 서버가 패킷의 body 영역을 사용할 수 있게끔 설정
app.use(express.urlencoded({extended : true}))
app.get('/', (request, response) => {
    console.log('메인서버 실행!');
    // 기존 방식 -> res를 통해서 writehead, write, end로 사용했다.
    // Exmpress -> 3개의 기능을 통합한 

    response.sendFile(__dirname + '/public/main.html');
    // 노드 서버
    //http://localhost:5036
})

app.get('/plus', (request, response) => {
    console.log('계산서버 실행!');
    // 기존 방식 -> res를 통해서 writehead, write, end로 사용했다.
    // Exmpress -> 3개의 기능을 통합한 

    response.sendFile(__dirname + '/public/plus2.html');
    // 노드 서버
    //http://localhost:5036/plus
})

app.get('/getplus', (request, response) => {
    console.log('계산요청 들어옴');
    // 클라이언트 요청을 확인하기 위한 로그 출력
    let query = request.query;
    console.log('넘버1 : ' + query.input1 + ', 넘버2 : ' + query.input2);
    // 요청 데이터(input1, input2) 확인을 위한 로그 출력

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    // HTTP 응답 헤더 설정 - 상태 코드 200과 콘텐츠 타입 설정
    // text/html로 응답하며 UTF-8 인코딩을 사용해 한글이 깨지지 않도록 설정

    response.write(`<h1>${query.input1}+${query.input2}=${parseInt(query.input1) + parseInt(query.input2)}</h1>`);
    // 입력 받은 숫자를 더한 결과를 HTML로 응답

    response.end();
    // 응답 종료

})

app.get('/getlogin', (request, response) => {
    console.log('getlogin 실행!');
    let myQuery = request.query;
    //response.sendFile(__dirname + ((myQuery.id ==="smhrd" && myQuery.pw === "123" )? '/public/loginSuccess.html' : '/public/loginFail.html'));

    if (myQuery.id == "smhrd" && myQuery.pw == "123") {
        console.log('성공')
        response.sendFile(__dirname + '/public/loginSuccess.html')
    }
    else {
        console.log('실패')
        response.sendFile(__dirname + '/public/loginFail.html')
    }

    // 기존 방식 -> res를 통해서 writehead, write, end로 사용했다.
    // Exmpress -> 3개의 기능을 통합한 

    //response.end() sendFile사용시 쓰지 말것


})
app.post('/postlogin', (request, response) => {
    console.log('postlogin 실행!');
    console.log(request.body)
    let myData = request.body

    if (myData.id == "smhrd" && myData.pw == "123") {
        console.log('성공')
        response.sendFile(__dirname + '/public/loginSuccess.html')
    }
    else {
        console.log('실패')
        response.sendFile(__dirname + '/public/loginFail.html')
    }
    // 노드 서버
    //http://localhost:5036/postlogin

})


app.listen(5036);