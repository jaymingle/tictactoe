import './App.css'
import Square from "./components/Square.jsx";

function App() {

  return (
    <>
      <div className="app-class">
          <p>Welcome to Ghana</p>
          <div className="board-row">
              <Square/>
              <Square/>
              <Square/>
          </div>

          <div className="board-row">
              <Square value={4}/>
              <Square value={5}/>
              <Square value={6}/>
          </div>

          <div className="board-row">
              <Square value={7}/>
              <Square value={8}/>
              <Square value={9}/>
          </div>

      </div>
    </>
  )
}

export default App
