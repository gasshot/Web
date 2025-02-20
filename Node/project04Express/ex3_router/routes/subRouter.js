/*
    해당 라우터는 경로 상에 esports라는 경로가 포함되어 있으면 관리하는 라우터

*/

const express = require('express');
const router = express.Router();
const path = require("path");
const publicPath = path.join(__dirname, "../public")

// 1) ㄷ스포츠 메인 페이지 돌려주기
router.get('/', (request, response) => {
    console.log('E-sport 활성화');
    response.sendFile(path.join(publicPath + '/esports.html'));
});

// 2) 롤 페이지
router.get('/lol', (request, response) => {
    console.log('lol 활성화');
    response.sendFile(path.join(publicPath + '/lol.html'));
});


module.exports = router;