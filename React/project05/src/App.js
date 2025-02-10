import './App.css';
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom';

// Route : 컴포넌트에 주소값을 부여하는 기능

function App() {
  return (
    <div className="App">

      {/* Route를 사용해 '/' 주소를 Home에 대응 */}
      {/* http://localhost:3000 */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* Route를 사용해 '/about' 이란 주소를 About 컴포넌트에 대응 */}
        <Route path='/about' element={<About></About>}></Route>
      </Routes>


    </div>
  );
}

export default App;
