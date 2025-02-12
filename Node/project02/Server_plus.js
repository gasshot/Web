const http = require('http')
const myUrl = require('url')
// 요청한 url을 사용할 수 있는 모듈

http.createServer((request, response)=>{
    // request : 요청
    // response : 응답
    console.log(request.url)
    // 문자열로 받은 쿼리스트링 데이터를 객체 형식으로 변환
    // 객체로 전환
    let query = myUrl.parse(request.url,true).query
    console.log(query.inputID)

    console.log('계산요청 들어옴')
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    // 입력 받은 id 


    response.write(`<h1>${query.input1}+${query.input2}=${parseInt(query.input1) + parseInt(query.input2)}</h1>`)

    response.end()


}).listen(5004)