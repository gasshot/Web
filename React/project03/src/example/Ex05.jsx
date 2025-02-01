import React from 'react'

const Ex05 = () => {
    // map 함수란? 기존 배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성한다.
    let numList = [1, 2, 3, 4, 5]
    //console.log('기존 배열', numList)

    let numList2 = numList.map(item => (item * 2))
    //console.log('새 배열', numList2)

    // 문자로 map
    let strList = ['선영표', '임다이', '이영훈']
    let newStrList = strList.map(item => item + '선생님')
    console.log('선생님들', newStrList)

    // map함수를 이용해서 단순한 데이터 배열이
    // 아니라 컴포넌트 배열을 만들어보면 어떻까?

    let newComList = strList.map(item => <button>{item}</button>)
    // 주의사항!! map 함수를 이용해서 컴포넌트를 렌더링할 때
    //           반드시 고유한 값을 key 속성에 입력해주어야한다.


    // 예제
    let lunchList = ['맘스터치', '큐브구내식당', '한솥', '베스트']
    let kk = lunchList.map((item, index) => <li key={index}>{item}</li>);

    let ff = (
        <div>
            <div>오늘의 점심메뉴!</div>
            <ul>{kk}</ul>
        </div>
    );
    return ff;
}

export default Ex05