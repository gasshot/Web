//http://localhost:3000
// 1. http 모듈 가져오기
const http = require('http') // 규격
http.createServer(()=>{
    // 노드 서버 생성
    // 요청에 따른 응답을 해줄 수 있는 함수
    console.log('서버 생성 완료')
}).listen(5000)

//http://localhost:5000