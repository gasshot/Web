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
    h1Tag.innerText = '안녕히가세요'





