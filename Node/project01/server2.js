// 사용자로 부터 요청받는 서버를 만들어주세요!
// 단! 서버는 5001번 포트에서 동작

// 1. 만약 선생님이 접근 했을 때는 응답으로 '칼퇴하세요~'

const http = require('http') // 규격
const ip = require('ip')
//createServer : 서버 생성 기능

http.createServer((request, response) => {
    // request : 요청 정보를 가지고 있는
    // response : 응답에 따른 정보를 가지고 있는 객체

    //let connIP = ip.address() // ip.address()는 서버의 IP 주소를 반환하므로, 
    // 요청을 보낸 클라이언트의 IP 주소와 비교할 수 없다

     // 클라이언트 IP 주소 가져오기
     let clientIP = request.socket.remoteAddress;

     // IPv6 로컬호스트(::1) 처리
     if (clientIP === '::1') {
         clientIP = '127.0.0.1';
     }
 
     console.log('Client IP:', clientIP);


    // HTML 응답 보내기
    console.log(connIP);
    //console.log('Node.js 서버가 실행 중입니다!');

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    if(connIP === '192.168.219.46'){
        response.write("<h1>열심히 공부하자</h1>")
    }
    if(connIP === '192.168.219.66'){
        response.write("<h1>칼퇴하세요~</h1>")
    }
    if(connIP === '192.168.219.54'){
        response.write("<h1>나여~</h1>")
    }
        
    response.end(); // 응답 종료
}).listen(5001)
// listen(5001) -> 위에서 만든 서버를 내컴퓨터 5001번째 위치에서 실행


//http://localhost:5001
//192.168.219.54:5001