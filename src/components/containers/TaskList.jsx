import React, { useState, useEffect } from "react";
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

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //   const defaultTask2 = new Task(
  //     "Tarea de prueba 2",
  //     "Descripción de prueba 2",
  //     false,
  //     LEVELS.URGENT
  //   );

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Modificacion de tareas");
    setLoading(false);
    return () => {
      console.log("Componente eliminado");
    };
  }, [tasks]);

  function changeCompleted(id) {
    console.log("Cambiar estado de la tarea");
  }

  return (
    <div>
      <h1>Lista de tareas:</h1>
      {/* TODO: Aplicar for/map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskList;
