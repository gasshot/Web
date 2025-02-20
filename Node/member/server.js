const express = require('express');
const path = require("path");
// 라우터 연결
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const app = express();
// 정적 파일 서빙

const PORT = 5007;
app.use(express.urlencoded({extended : false}))
app.use('/', mainRouter);
app.use('/user', userRouter);

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 실행되었습니다: http://localhost:${PORT}`);
});