import './App.css'
import Square from "./components/Square.jsx";
import {useState} from "react";

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const handleClick = (i) => {
        const nextSquares = squares.slice()
        nextSquares[i] = "X"
        setSquares(nextSquares)
    }
  return (
    <>
      <div className="app-class">
          <p>Welcome to Ghana</p>
          <div className="board-row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
          </div>

          <div className="board-row">
              <Square value={squares[3]} onSquareClick={() => handleClick(2)}/>
              <Square value={squares[4]} onSquareClick={() => handleClick(2)}/>
              <Square value={squares[5]} onSquareClick={() => handleClick(2)}/>
          </div>

          <div className="board-row">
              <Square value={squares[6]} onSquareClick={() => handleClick(2)}/>
              <Square value={squares[7]} onSquareClick={() => handleClick(2)}/>
              <Square value={squares[8]} onSquareClick={() => handleClick(2)}/>
          </div>

      </div>
    </>
  )
}

export default App
