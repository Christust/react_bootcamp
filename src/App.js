import logo from "./logo.svg";
import "./App.css";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ejemplo4 nombre="Christos">
          <h3>Contenido en props children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
