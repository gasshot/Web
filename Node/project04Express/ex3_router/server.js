/*
    server.js 역할 = 우리의 웹서비스가 동작할 수 있게 도와주는 서버의 역할
    1) 서버를 생성
    2) 클라이언트의 요청에 맞게 응답 담당
    3) DB에 연결 / 머신러닝 연결
*/

const express = require('express');
const path = require('path');
const app = express();
const PORT = 5007;

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'public')));

// 패킷의 body 영역 사용 가능하도록 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 연결
const mainRouter = require('./routes/mainRouter.js');
app.use('/', mainRouter);

const subRouter = require('./routes/subRouter.js');
app.use('/esports', subRouter);

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 실행되었습니다: http://localhost:${PORT}`);
});
