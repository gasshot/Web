//http://localhost:3000
// 1. http 모듈 가져오기
// http 모듈 : 서버를 구축할 수 있게끔 만들어진 모듈
//             사용자로부터 요청을 받을 수 있고, 요청에 따라 응답


const http = require('http') // 규격

//createServer : 서버 생성 기능

http.createServer((request, response) => {
    // request : 요청 정보를 가지고 있는
    // response : 응답에 따른 정보를 가지고 있는 객체

    // request.connection.remoteAddress:
    let ip = request.connection.remoteAddress
    // HTML 응답 보내기
    console.log('Node.js 서버가 실행 중입니다!');

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.write("<h1>오늘은 칼퇴!!</h1>")
    response.end(); // 응답 종료
}).listen(5000)
// listen(5000) -> 위에서 만든 서버를 내컴퓨터 5000번째 위치에서 실행


//http://localhost:5000


//localhost
//0.0.0.0
//127.0.0.1