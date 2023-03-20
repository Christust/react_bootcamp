import React from "react";
import { Outlet } from "react-router-dom";
import TaskList from "../../components/containers/TaskList";

const TaskPage = () => {
  return (
    <div>
      <h1>Task Page</h1>
      <TaskList></TaskList>
    </div>
  );
};

export default TaskPage;
