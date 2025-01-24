import './App.css';
import MenuItem from './components/MenuItem';
import MemberBox from './components/MemberBox';
function App() {
  /*컴포넌트 : 리액트로 만들어진 앱을 이루는 최소 단위
    - 반복되는 코드를 하나로 묶어서 컴포넌트로 만들어준다.
    - 내가 원하는 코드를 묶어서 태그화시킨다.
    - 반드시 대문자로 시작해야함. 기존의 HTML태그와 구분
      ex) hr이라는 html 태그를 쓰고 싶을 수도 있고
      HR이라는 컴포넌트를 만들어 쓰고 싶을 수도 있기 때문에
      대소문자 구분이 철저하다.

    ** 컴포넌트 만드는 방법
    1. 대문자로 시작하는 jsx파일을 생성한다.
    2. 파일 이름과 동일하게 함수를 만들어서 export시킨다.
    3. 안에 return문을 작성해서 내가 원하는 코드를 적는다.
    
    ** 컴포넌트 사용 방법
    1. 사용할 곳에 컴포넌트를 import한다.
    2. 대문자로 return문 안에서 사용한다.

     */

  /*프로퍼티, 프롭스(props)
    - 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할 때 사용
    ex) 상위(App.js)에서 하위(MenuItem.jsx)으로 메뉴이름을 전달 
    
    - 상위 컴포넌트 : <컴포넌트 이름 속성 = "값">
    - 하위 컴포넌트 : 매개변수로 값을 전달받는데, Object형태로 전달된다.
                      매개변수.속성이름 <-
    */
  return (
    <div>
      <MenuItem name="아메리카노" price={2800} />
      <MenuItem name='자몽에이드' price={2800} />
      <MenuItem name='페퍼민트' price={2800} />
      <MenuItem name='바닐라라떼' price={2800} />
      <hr />
      {
        /*1. MemberBox라는 이름의 컴포넌트를 생성
        /*2. MemberBox라는 컴포넌트 혁할을 할수 잇도록 함수, 수출 return wkrtjd
        3. 팀원 1명당 하나의 박스로 소개
        - 포함되어야는 정보 : 팀이름 , 팀원이름, 팀원이 좋아하는 노래
        팀이름 변수형태로 데이터 전달, 팀원 이름과 노래는 텍스트 형태로 전달
        다된 사람들은 박스로 가서 객체 형태로스타일링
        
        */
      }

      <MemberBox teamName='사바나' name='김예은' song='너의 곁으로 - 조성모' />
      <MemberBox name='안지운' song='터치드-야경' />
      <MemberBox name='전석현' song='천상연' />
      <MemberBox name='강인오' song='유행가' />
      <MemberBox teamName='사바나' name='김민정' song='아모르파티' />
      <MemberBox name='김현웅' song='바람 - 윤하' />
    </div>

  );
}

export default App;
