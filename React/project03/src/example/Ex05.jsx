import React from 'react'

const Ex05 = () => {
    // map 함수란? 기존 배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성한다.
    let numList = [1, 2, 3, 4, 5]
    //console.log('기존 배열', numList)

    //let numList2 = numList.map(item => (item * 2))
    //console.log('새 배열', numList2)

    // 문자로 map
    //let strList = ['선영표', '임다이', '이영훈']
    //let newStrList = strList.map(item => item + '선생님')
    //console.log('선생님들', newStrList)

    // map함수를 이용해서 단순한 데이터 배열이
    // 아니라 컴포넌트 배열을 만들어보면 어떻까?

    //let newComList = strList.map(item => <button>{item}</button>)
    // 주의사항!! map 함수를 이용해서 컴포넌트를 렌더링할 때
    //           반드시 고유한 값을 key 속성에 입력해주어야한다.


    let filteredList = numList.filter(item => item % 2 === 1)
    console.log('filteredList', filteredList)

    let students = [
        { name: "홍길동", age: 30, bloodType: "A" },
        { name: "고길동", age: 50, bloodType: "AB" },
        { name: "둘리", age: 10, bloodType: "A" },
    ];
    let newStudents = students.filter(item => item.age >= 30)
    let newStudentsMap = newStudents.map(item => <button>{item.name}</button>)

    // 예제
    let lunchList = ['맘스터치', '큐브구내식당', '한솥', '베스트']
    let kk = lunchList.map((item, index) => <li key={index}>{item}</li>);

    let ff = (
        <div>
            <p>오늘의 점심메뉴!</p>
            <ul>{kk}</ul>
            {newStudentsMap}
        </div>
    );

    // =======================================================
    // filter 함수란? 주어진 함수의 테스트를 통과하는 요소들만 모아서 새로운 배열로 반환한다.




    return ff;
}

export default Ex05