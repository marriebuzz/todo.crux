import React, { useEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTasks } from "../api";
function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (id) {
      fetchTasks(id)
        .then((taskData) => {
          setTask(taskData);
        })
        .catch((error) => {
          console.error("Error fetching task:", error);
        });
    }
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Task Detail</h2>
    </div>
  );
}
export default TaskDetail;
