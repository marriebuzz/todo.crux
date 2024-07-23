import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTasks, deleteTask } from "/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };
  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/detail/${task.id}`}>{task.name}</Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Task</Link>
    </div>
  );
}
export default TaskList;
