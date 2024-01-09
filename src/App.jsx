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
              <Square value={squares[0]}/>
              <Square value={squares[1]}/>
              <Square value={squares[2]}/>
          </div>

          <div className="board-row">
              <Square value={squares[0]}/>
              <Square value={squares[0]}/>
              <Square value={squares[0]}/>
          </div>

          <div className="board-row">
              <Square/>
              <Square/>
              <Square/>
          </div>

      </div>
    </>
  )
}

export default App
