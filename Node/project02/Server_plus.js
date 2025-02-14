const http = require('http');
const myUrl = require('url');
// 요청한 url을 사용할 수 있는 모듈

http.createServer((request, response) => {
    // request : 클라이언트 요청 객체
    // response : 서버 응답 객체

    if (request.url === '/favicon.ico') {
        // 브라우저가 자동으로 요청하는 favicon.ico 파일에 대한 처리
        // favicon.ico는 브라우저가 주소창 옆에 표시하는 아이콘 파일로,
        // 서버가 이를 처리하지 않으면 불필요한 로그가 발생하거나 오류로 이어질 수 있음
        response.writeHead(204);
        // 204 상태 코드는 콘텐츠가 없음을 나타냄 (No Content)
        response.end();
        return;
    }


    console.log('계산요청 들어옴');
    // 클라이언트 요청을 확인하기 위한 로그 출력

    let query = myUrl.parse(request.url, true).query;
    // 문자열로 받은 쿼리스트링 데이터를 객체 형식으로 변환
    // URL의 뒤에 입력 데이터를 함께 제공하는 가장 단순한 데이터 전달 방법
    // 객체로 전환

    console.log('넘버1 : ' + query.input1 + ', 넘버2 : ' + query.input2);
    // 요청 데이터(input1, input2) 확인을 위한 로그 출력

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    // HTTP 응답 헤더 설정 - 상태 코드 200과 콘텐츠 타입 설정
    // text/html로 응답하며 UTF-8 인코딩을 사용해 한글이 깨지지 않도록 설정

    response.write(`<h1>${query.input1}+${query.input2}=${parseInt(query.input1) + parseInt(query.input2)}</h1>`);
    // 입력 받은 숫자를 더한 결과를 HTML로 응답

    response.end();
    // 응답 종료

}).listen(5004);
// 서버 실행, 5004 포트에서 클라이언트 요청 대기
