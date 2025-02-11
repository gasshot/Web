import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Join from './components/Join';
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react';
import ToDoList from './components/ToDoList.jsx';

//createContext : 공유 저장소 생성 기능
export const AppData = createContext();

function App() {
  const [id, setId] = useState(""); // 초기값을 빈 문자열로 설정

  return (
    <div className="App">
      {/* 공유 저장소 허용 */}
      {/* value : 공유할 값 */}
      <AppData.Provider value={{ id: id, set: setId }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/toDoList" element={<ToDoList />} />
        </Routes>
      </AppData.Provider>
    </div>
  );
}

export default App;
