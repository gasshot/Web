import React from 'react'

const Ex05 = () => {
    // map 함수란? 기존 배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성한다.
    let numList = [1, 2, 3, 4, 5]
    let numList2 = numList.map(item => item*2)
    console.log(numList2)
    return (




        <div>Ex05</div>
    )
}

export default Ex05