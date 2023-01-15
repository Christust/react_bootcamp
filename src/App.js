import logo from "./logo.svg";
import "./App.css";
import TaskList from "../src/components/containers/TaskList";
import FatherComponent from "./components/containers/FatherComponent";

function App() {
  return (
    <div className="App">
      {/* <TaskList></TaskList> */}
      <FatherComponent></FatherComponent>
    </div>
  );
}

export default App;
