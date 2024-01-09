import './App.css'
import Square from "./components/Square.jsx";

function App() {

  return (
    <>
      <div className="app-class">
          <p>Welcome to Ghana</p>
          <div className="board-row">
              <Square value={1}/>
              <Square value={2}/>
              <Square value={3}/>
          </div>

          <div className="board-row">
              <Square value={4}/>
              <Square value={5}/>
              <Square value={6}/>
          </div>

          <div className="board-row">
              <Square value={1}/>
              <Square value={1}/>
              <Square value={1}/>
          </div>

      </div>
    </>
  )
}

export default App
