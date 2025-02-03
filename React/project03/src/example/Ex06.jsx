import React from 'react'
import Ex06Box from '../components/Ex06Box'
import data from '../json/ex06data.json'




const Ex06 = () => {
    //console.log(data.result)
    let list = data.result
    let newlist = list.filter(item => item.birthYear <= 1994)
    // 1. 기져온 데이터에서 배열을 찾는다
    // 2. 찾은 배열만큼 를 렌더링 (map함수)
    // 3. props를 통해 각각 Box에 정보를 전달
    // 4. box로 가서 결과를 구현해보자
    return (
        <div>
            <div><h1>Map 실습</h1></div>
            <div style={{ display: 'flex' }}>
                {list.map(item => <Ex06Box title={item.title}
                    birthyear={item.birthYear}
                    content={item.content}
                    imgSrc={item.imgSrc}
                    SNS={item.SNS}
                />)}
            </div >
            <h1>Filter 실습</h1>
            
            <div style={{ display: 'flex' }}>
                {newlist.map(item => <Ex06Box title={item.title}
                    birthyear={item.birthYear}
                    content={item.content}
                    imgSrc={item.imgSrc}
                    SNS={item.SNS}
                />)}
            </div >

        </div>
    )
}

export default Ex06