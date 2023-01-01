import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pures/TaskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "Tarea de prueba",
    "Descripción de prueba",
    true,
    LEVELS.URGENT
  );
//   const defaultTask2 = new Task(
//     "Tarea de prueba 2",
//     "Descripción de prueba 2",
//     false,
//     LEVELS.URGENT
//   );

  return (
    <div>
      <h1>Lista de tareas:</h1>
      {/* TODO: Aplicar for/map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskList;
