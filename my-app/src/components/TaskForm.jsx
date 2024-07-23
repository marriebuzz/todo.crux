import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createTask, updateTask } from "/api";

function TaskForm() {
  const history = useHistory();
  const { id } = useParams();
  const isEditMode = !!id;

  const [task, setTask] = useState({
    name: "",
    isCompleted: false,
    deadline: "",
    assignedTo: "",
    additionalInfo: "",
  });

  useEffect(() => {
    if (isEditMode) {
      // Fetch task details
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      updateTask(id, task).then(() => {
        history.push("/");
      });
    } else {
      createTask(task).then(() => {
        history.push("/");
      });
    }
  };

  return (
    <div>
      <h2>{isEditMode ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">{isEditMode ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default TaskForm;
