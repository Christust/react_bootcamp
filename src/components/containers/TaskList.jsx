import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pures/forms/TaskForm";
import TaskComponent from "../pures/TaskComponent";

const TaskList = () => {
  const defaultTask = new Task(
    "Tarea de prueba",
    "Descripción de prueba",
    true,
    LEVELS.URGENT
  );

  const defaultTask2 = new Task(
    "Tarea de prueba 2",
    "Descripción de prueba 2",
    false,
    LEVELS.NORMAL
  );

  const defaultTask3 = new Task(
    "Tarea de prueba 2",
    "Descripción de prueba 2",
    true,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

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
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Lista de tareas:</h5>
          </div>
          <div
            className="card-body col-12"
            data-mbd-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table className="col-12">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Nivel</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Iterar sobre una lista de tareas */}
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index + "keytask"}
                      task={task}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
