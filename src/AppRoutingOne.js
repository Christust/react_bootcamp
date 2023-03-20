import "./App.css";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TaskList from "./components/containers/TaskList";
import TaskPage from "./pages/tasks/TaskPage";

function AppRoutingOne() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: "task-list",
          element: <TaskPage></TaskPage>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutingOne;
