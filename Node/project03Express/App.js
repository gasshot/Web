// const http = require('http')
// http.createServer((request,response)=>{

// }).listen(5009)
// 기본적인 서버 생성 구조

// express 사용 서버 생성 및 실행
const express = require('express')
// app 이름의 서버를 생성
const app = express();
// 미들웨어 생성
const router = express.Router();
// a미들웨어 서버 적용(등록)
app.use(router)

//http://localhost:5027
router.get('/',(request, response)=>{

    console.log('Main 접속')
    response.end()
})
//http://localhost:5027/test
router.get('/test',(request, response)=>{
    console.log('test 접속')
    response.end()
})

// 서버실행
app.listen(5027)