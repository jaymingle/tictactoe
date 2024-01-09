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
              <Square/>
              <Square/>
              <Square/>
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
