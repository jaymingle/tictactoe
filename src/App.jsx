import './App.css'
import Square from "./components/Square.jsx";
import {useState} from "react";

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <div className="app-class">
          <p>Welcome to Ghana</p>
          <div className="board-row">
              <Square value={squares[0]} onSquareClick={handleClick}/>
              <Square value={squares[1]} onSquareClick={handleClick}/>
              <Square value={squares[2]} onSquareClick={handleClick}/>
          </div>

          <div className="board-row">
              <Square value={squares[3]}/>
              <Square value={squares[4]}/>
              <Square value={squares[5]}/>
          </div>

          <div className="board-row">
              <Square value={squares[6]}/>
              <Square value={squares[7]}/>
              <Square value={squares[8]}/>
          </div>

      </div>
    </>
  )
}

export default App
