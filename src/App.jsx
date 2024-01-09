import './App.css'
import Square from "./components/Square.jsx";

function App() {

  return (
    <>
      <div className="app-class">
          <p>Welcome to Ghana</p>
          <div className="board-row">
              <Square/>
              <button className="square">X</button>
              <button className="square">X</button>
          </div>

          <div className="board-row">
              <button className="square">X</button>
              <button className="square">X</button>
              <button className="square">X</button>
          </div>

          <div className="board-row">
              <button className="square">X</button>
              <button className="square">X</button>
              <button className="square">X</button>
          </div>

      </div>
    </>
  )
}

export default App
