import './App.css';
import Board from './components/Board';
import tiles from './components/tiles';

function App() {
  return (
    <div className="grid grid-cols-8 gap-2">
      <Board tiles={tiles}/>
    </div>
  );
}

export default App;
