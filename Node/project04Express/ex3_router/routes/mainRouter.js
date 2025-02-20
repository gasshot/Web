/*
    라우터
    목적 : 사용자가 요청하는 모든 경로에 관련된 업무는 라우터가 담당
    why? 1) 서버의 업무 분배 
         2) 유지보수의 편의성
*/

const express = require("express")

// server에서는 모든 기능을 app에 담았지만
// 라우터에서는 메모리소비를 줄이기 위해 필요한 기능만 가져옵니다!
const router = express.Router();
const path = require("path")
const publicPath = path.join(__dirname,"../public/")

// 1. 사용자가 메인페이지에 방문했을 때 main.html파일 보여주기
// http://localhost:5007
router.get("/",(req,res)=>{
    // 현재 위치에서 파일을 찾기 위해서는 경로 수정 필요
    // 주의점 : 문자로 보내버리면 컴퓨터는 단순 텍스트로 인식
    // 사용법 : path모듈을 활용하자.
    res.sendFile(publicPath + "main.html");   
})

// 2. 각각 야구와 축구의 요청에 맞게 응답할 코드 작성
router.get("/baseball",(req,res)=>{

    res.sendFile(publicPath+"baseball.html")
})
router.get("/soccer",(req,res)=>{

    res.sendFile(publicPath+"soccer.html")
})

// 라우터와 서버파일을 연결
module.exports = router;