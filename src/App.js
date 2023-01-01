import logo from "./logo.svg";
import "./App.css";
import GreetingClass from "./components/pures/GreetingClass";
import GreetingFunctional from "./components/pures/GreetingFunctional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GreetingClass name="Christos"></GreetingClass> */}
        <GreetingFunctional name="Christust"></GreetingFunctional>
      </header>
    </div>
  );
}

export default App;
