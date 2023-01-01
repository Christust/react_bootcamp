import logo from "./logo.svg";
import "./App.css";
// import GreetingClass from "./components/pures/GreetingClass";
// import GreetingFunctional from "./components/pures/GreetingFunctional";
import TaskList from "./components/containers/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GreetingClass name="Christos"></GreetingClass> */}
        {/* <GreetingFunctional name="Christust"></GreetingFunctional> */}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
