import './App.css';

function App() {

  /* JSX : 하나의 파일 안에 HTML문법과 JS를 동시에 작성
      - 가독성이 좋고 작성이 쉽다.
      - 더이상 HTML요소를 수정하고자 할 때, document에 접근하지 않아도 됨
      - JSX로 서로 하나 상태임
    JSX의 특징
    1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸져 있어야한다.
      => 꼭 div태그가 아니어도 됨
      => <></> => 가능  
    2. 표현식 사용 가능
      => 만약 return문 안에서 JS문법을 사용하려면 {} 작성
      => 대부분 사용 가능하지만 if문은 사용 불가
      => 삼항연산자를 많이 사용하지만 삼항연산자는 조건에 따른 실행문이 2개
      
      조건에 따른 실행문이 2개 => 삼항연산자
      조건에 따른 실행문이 1개 => &&연산자
      조건에 따른 실행문이 3개 이상 => return문 바깥쪽에서 if문 사용
    3. 스타일링 적용하는 방법
      3-1) 객체형태로 style속성 삽입  
      3-2) css형태로 작성 
    4. 기존 JS문법과 다른 점들
      - class 대신 className을 사용
      - HTML 태그를 사용할 때 반드시 소문자만 사용할 것
        ** 대문자는 컴포넌트로 사용을 함
      - 끝태그 생략 불가 (content가 없더라도)     
  */

  let name = '임다이'
  let state = true

  let result = ''
  // 2-3. if문
  if(name==='선영표'){
    result = 'React'
  }
  else if(name==='고민성'){
    result = 'MachineLeaning'
  }
  else if(name==='임다이'){
    result = 'Java'
  }
  else{
    result =  'ㄹ다른 시간표를 확인해보세요!'
  }
  
  const fontStyle ={
    color : 'blue',
    backgroundColor : 'lightblue'
  }


  return (
    <div id= 'container'>
      <div style = {fontStyle}>2025.01.24</div>
      {/* 2-1. 삼항연산자 */}
      {(name === '임다이') ?
        <div>{name}님 환영합니다.</div> :
        <div>{name}님 다음 기회에 찾아와주세요...</div>
      }
      {/* 2-2. &&연산자 */}
      {state && <p>매장 운영중입니다.</p>}
      {result}
    </div>

  );
}

export default App;
