import React, { Component } from 'react';

export default class Myclass extends Component {
    state = { num: 0 };
    // LifeCycle : 컴포넌트의 생명주기

    componentDidMount() {
        console.log('Mount');
        // Mount : 맨처름 렌더링 됬을 때(맨 처음 화면에 보여졌을 때)
        // 컴포넌트가 처음 렌더링될 때 호출

    }

    // 상태가 업데이트될 때 호출
    componentDidUpdate() {
        console.log('Update');

        if (this.state.num === 10) {
            alert('목표숫자도달')
        }
    }

    // 상태 업데이트 핸들러
    handleIncrement = () => {
        //this.setState((prevState) => ({ num: prevState.num + 1 }));
        let aa = this.state.num
        this.setState({ num: (aa + 1) })
    };

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleIncrement}>PLUS</button>
            </div>
        );
    }
}
