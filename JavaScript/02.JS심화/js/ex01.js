/*
    DOM : Document Object Model
    - Document : html 문서
    - Object : JS 객체

    HTML 문서는 통으로 되어있는 구조이기 때문에 세부적으로 변경을 하려면
    전부 객체 형식으로 쪼개주어야한다. ==> DOM
    => 쪼개진 결과를 노드라고 함 => 최상위 노드 : document 객체

    => 내가 만약 HTML 문서를 무언가 바꿔주고싶다? 그럼 무조건 document로 가야함

    ex) <h1 id="h1Tag">안녕하세요</h1>
        => h1(태그), id(속성), h1Tag(속성에 대한 값), 안녕하세요(컨텐츠)
    

*/

// (정처기 필기)) 표기법 (ex. backgroudn color)
// 1. (JS) camelCase(카멜 표기법) : 첫 단어는 소문자로 시작, 뒤에서부턴 대문자
//    - backgroundColor
// 2. (Python) snake_case(스네이크 표기법) : 소문자 + 아래_하이픈
//    - background_color
// 3. (CSS) kebab-case(케밥 표기법) : 소문자 + -하이픈
//    - background-color
// 4. 헝가리안 표기법 : 변수 작성 시 자료형을 구분 지을 수 있는 접두어를 함께 사용


// 요청 : h1 Tag의 안녕하세요 =>  안녕히 가세요로 변경해보자.

// STEP 1) id가 h1Tag인 요소를 JS로 가져와보자
// 1. HTML 문서객체에 접근 : document
// 2. 객체 내 접근 : .
// 3. 가지고 오다 : get
// 4. 요소를 : Element
// 5. ~를 통해서 : by~

let h1Tag;
h1Tag = document.getElementById('h1Tag')
console.log('h1Tag', h1Tag)

// STEP 2) 내가 가져온 요소에서 컨텐츠만 추출해보자.
// 안에 있는 (inner) 텍스트 (Text) => 요소.innerText

console.log('innerText', h1Tag.innerText)
h1Tag.innerHTML = '<a href="#">안녕히가세요</a>'
// innerText는 단순 텍스트만을 수정해준다.
// html 요소를 포함해서 수정할 수 있는 innerHTML을 사용

// 요청 : 클래스를 통해 요소를 가져와보자.
// id는 한 페이지당 중복이 없기 때문에 getElement로 요소 1개를 가져올 수 있지만
// class나, TagName이나, Name같은 경우는 한 페이지에 여러 개가 있을 가능성이 존재
// getElements를 통해 여러 요소를 배열과 유사한 형태로 가져온다.

// STEP2. class가 num인 요소에 접근
// 1. HTML문서에 접근 -> document
// 2. 객체에 접근 -> .
// 3. 요소들을 가지고 오다 : getElements
// 4. 클래스를 통해서 ->  byClassName

let numClass;
numClass = document.getElementsByClassName('num')

console.log('numClass', numClass[0])

// HTMLCollection이란? 유사배열 -> 인덱스 번호를 통해 접근
// STEP 2) class가 num인 0번째 요소의 내용을 수정해보자.
numClass[0].innerText = '제 이름은 강인오입니다.'

// STEP 3) class가 num인 모든 요소를 가져와보자.

for(let i =0 ; i< numClass.length; i++){
    console.log(numClass[i].innerText)
}
