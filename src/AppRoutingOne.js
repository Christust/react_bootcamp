import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TaskList from "./components/containers/TaskList";

function AppRoutingOne() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <NotFoundPage></NotFoundPage>,
    },
    {
      path: "task-list",
      element: <TaskList></TaskList>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutingOne;
