import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import "../../styles/task.scss";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Renderizado del task");
    return () => {
      console.log("Muerte del task");
    };
  }, []);

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return <span className="badge bg-primary">{task.level}</span>;
      case LEVELS.URGENT:
        return <span className="badge bg-warning">{task.level}</span>;
      case LEVELS.BLOCKING:
        return <span className="badge bg-danger">{task.level}</span>;
      default:
        break;
    }
  }
  return (
    <tr
      className={`fw-normal ${
        task.completed ? "task-completed" : "task-pending"
      }`}
    >
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-items-center">
        <span className="ms-2">{task.description}</span>
      </td>
      <td className="align-items-center">
        <span className="ms-2">{taskLevelBadge()}</span>
      </td>
      <td className="align-items-center">
        <span className="ms-2">
          {task.completed ? (
            <i
              onClick={() => complete(task)}
              className="bi-toggle-on"
              style={{ color: "green" }}
            ></i>
          ) : (
            <i
              onClick={() => complete(task)}
              className="bi-toggle-off"
              style={{ color: "grey" }}
            ></i>
          )}
          <i
            onClick={() => remove(task)}
            className="bi-trash"
            style={{ color: "tomato" }}
          ></i>
        </span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
