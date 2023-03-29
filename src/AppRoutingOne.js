import "./App.css";
import {
  RouterProvider,
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter as Router,
  Link,
  redirect,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TaskList from "../src/components/containers/TaskList";
import AboutPage from "./pages/about/AboutPage";

function AppRoutingOne() {
  const logged = false;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<NotFoundPage />} path={"/"} element={<HomePage />}>
        <Route
          path={"/task-list"}
          element={logged ? <TaskList /> : <Navigate to={"/"} />}
        />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/faqs"} element={<AboutPage />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutingOne;
