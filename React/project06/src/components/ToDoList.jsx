import React, { useState } from 'react';
import usersList from '../json/users.json';

const ToDoList = () => {
    // JSON 데이터를 초기 상태로 설정
    const [list, setList] = useState(usersList);

    return (
        <div>
            <h1>유저 정보 테이블</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Password</th>
                        <th>Nickname</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.password}</td>
                            <td>{user.nickname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;
