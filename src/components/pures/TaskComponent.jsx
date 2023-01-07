import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Renderiza Task");
    return () => {
      console.log("Muerte del task");
    };
  }, []);
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripción: {task.description}</h3>
      <h3>Estatus: {task.completed ? "Completada" : "Pendiente"}</h3>
      <h3>Nivel: {task.level}</h3>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
