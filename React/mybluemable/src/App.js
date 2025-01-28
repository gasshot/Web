import './App.css';
import Board from './components/Board';
import tiles from './components/tiles';



function App() {
  let myTile = tiles

  return (


    <div className="grid grid-cols-8 gap-2">
      <Board tiles={myTile}/>
    </div>
  );
}

export default App;
