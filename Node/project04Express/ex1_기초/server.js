/*
    Express(프레임워크) -> Node로 서버를 제작할 때 틀을 제공하는 방식 
    - Why ? 공통적인 틀을 활용하면, 개발할 때 시간 절약, 유지보수가 편하다.
    - How ? 1) 워크스페이스에 npm i express 설치
            2) 폴더 4개 생성
            3) 서버파일 제작
            4) 폴더 4개 생성
    - 폴더 4가지 :            
            1) config(설정에 관한 파일)
            2) public(정적인 파일을 관리)
            3) routes(라우터 역할 담당)
            4) views(화면을 담당) -> React가 대체한다.


*/

//1. Express를 사용하기 위해서 모듈 호출
//import express from 'express';

const express = require('express');

//2. express의 모든 기능을 호출해서 사용하기 편하게 상수에 저장

const app = express();

// 중요한 포인트! -> express에서 정적인 파일을 호출하기 위해서는 반드시 설정이 필요(img, css, js)

app.use(express.static(__dirname + "/public"));

//4. 사용자가 요청한 내용에 맞게, 응답을 처리하는 부분을 제작
app.get("/", (request, response) => {
    console.log('메인서버 실행!');
    // 기존 방식 -> res를 통해서 writehead, write, end로 사용했다.
    // Exmpress -> 3개의 기능을 통합한 

    response.send('<h1>메인페이지입니다.</h1>')
    response.end();
})

app.get("/file", (request, response) => {
    // express에서 파일을 호출 할 때는 반드시 절대경로를 작성해야한다. => 규칙
    // 주의점 ! 절대 경로를 사용할 때는 사용자마다 경로가 다르면 오류(유지보수 취약), 보안에 취약
    // 절대경로를 컴퓨터가 알아서 불러오는 키워드가 존재-> __dirname
    response.sendFile(__dirname + '/public/main.html');
    console.log(__dirname);


    //response.end();
})

//3. 포트번호 지정 -> 리액트와 노드를 분리해서 개발한다면, 반드시 포트번호 중복을 체크
app.listen(5026);

//http://localhost:5026

/*
[ 2월 17일 노드 정리]

1) express 프레임워크 -> node기반의 대표가 되는 프레임워크(틀)
   - 목적 : 모든 개발자가 같은 환경에서 개발할 수 있게 만들어준다.
   - 4가지 폴더
      * config(설정), public(정적인 파일), routes(라우터), views(리액트)
   - send 기능 = writehead, write, end기능을 통합한 express에만 존재하는 응답기능
   * 특징 : 한번만 사용이 가능 (한 응답에 한해서)
   - sendFile 기능 = 응답을 파일로 넘겨줄 때 활용한다.
   * 중요한 키포인트 : Express에서는 파일을 응답할 때 반드시 절대경로를 사용한다.
   * 자동으로 현재 파일의 경로를 알아오는 키워드 = __dirname
   * 정적인 파일을 사용하기 위해서는 반드시 app에게 미들웨어 등록해주기
*/