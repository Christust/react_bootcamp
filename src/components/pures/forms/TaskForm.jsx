import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }
  return (
    <div>
      <form
        onSubmit={addTask}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            ref={nameRef}
            id="inputName"
            className="form-control form-control-lg"
            required
            autoFocus
          />
          <input
            type="text"
            ref={descriptionRef}
            id="inputDescription"
            className="form-control form-control-lg"
            required
          />
          <label htmlFor="selectLevel" className="form-label">
            Priority
          </label>
          <select
            ref={levelRef}
            defaultValue={LEVELS.NORMAL}
            id="selectLevel"
            className="form-select"
          >
            <option value={LEVELS.NORMAL}>Normal</option>
            <option value={LEVELS.URGENT}>Urgent</option>
            <option value={LEVELS.BLOCKING}>Blocking</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
