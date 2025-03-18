import { useState, useRef } from 'react';
import './App.css';
import GameOfLifeGrid from './components/GameOfLifeGrid';

function App() {
  const [count, setCount] = useState(0);
  const gridRef = useRef();

  const handleIterate = () => {
    setCount(count + 1);
    gridRef.current.fetchData();
  };

  return (
    <>
      <h1>CellaML</h1>
      <div className="card">
        <button onClick={handleIterate}>
          count is {count}
        </button>
      </div>
      <p>
        Click to iterate the Game of Life grid.
      </p>
      <GameOfLifeGrid ref={gridRef} />
    </>
  );
}

export default App;