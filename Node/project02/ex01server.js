const http = require('http')
const myUrl = require('url')
// 요청한 url을 사용할 수 있는 모듈

const querystring = require('querystring')
// 쿼리스트링 형식의 문자열을 객체로 사용할 수 있는 모듈

// POST방식
// 데이터를 Packet의 body라는 영역에 담아서 데이터를 주고 받겠다.

http.createServer((request, response) => {

    if (request.url === '/favicon.ico') {
        // 브라우저가 자동으로 요청하는 favicon.ico 파일에 대한 처리
        // favicon.ico는 브라우저가 주소창 옆에 표시하는 아이콘 파일로,
        // 서버가 이를 처리하지 않으면 불필요한 로그가 발생하거나 오류로 이어질 수 있음
        response.writeHead(204);
        // 204 상태 코드는 콘텐츠가 없음을 나타냄 (No Content)
        response.end();
        return;
    }

    //1. 데이터 로딩

    let body = ""
    request.on('data', (data) => {
        // data : 클라이언트에서 보낸 데이터
        body += data // 클라이언트에서 보낸 데이터 누적
        console.log(body)
    })


    //2. 데이터 사용
    request.on('end', () => {
        let postData = querystring.parse(body)
        console.log(postData)

        response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

        // 입력 받은 id

        response.write(`<h1>로그인${(postData.inputID === 'smhrd') && (postData.inputPW === '123') ? '성공' : '실패'}</h1>`)

        console.log('데이터 사용완료')
        response.end()

    })
    
}).listen(5003)


// GET 방식
// http.createServer((request, response)=>{
//     // request : 요청
//     // response : 응답
//     console.log(request.url)
//     // 문자열로 받은 쿼리스트링 데이터를 객체 형식으로 변환
//     // 객체로 전환
//     let query = myUrl.parse(request.url,true).query
//     console.log(query.inputID)

//     console.log('요청 들어옴')
//     response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

//     // 입력 받은 id

//     if((query.inputID === 'smhrd') && (query.inputPW === '123')){

//         response.write('<h1>로그인성공</h1>')
//     }
//     else{

//         response.write('<h1>로그인실패</h1>')
//     }


//     response.end()


// }).listen(5003)