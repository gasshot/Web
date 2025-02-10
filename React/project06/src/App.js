import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.jsx'
import Login from './components/Login.jsx'
import Join from './components/Join.jsx'
import ToDoList from './components/ToDoList.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        {/* Route를 사용해 '/about' 이란 주소를 About 컴포넌트에 대응 */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/toDoList' element={<ToDoList></ToDoList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
