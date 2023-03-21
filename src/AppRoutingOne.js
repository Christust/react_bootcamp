import "./App.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TaskList from "../src/components/containers/TaskList";
import AboutPage from "./pages/about/AboutPage";

function AppRoutingOne() {
  return (
    <Router>
      <aside>
        <Link to="/">Home</Link>
        <Link to="/task-list">Task</Link>
        <Link to="/about">About</Link>
        <Link to="/faqs">FAQS</Link>
      </aside>
      <div>
        <main>
          <Routes>
            <Route exact path={"/"} element={<HomePage />} />
            <Route exact path={"/task-list"} element={<TaskList />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/faqs"} element={<AboutPage />} />
            {/* Not found */}
            <Route element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
