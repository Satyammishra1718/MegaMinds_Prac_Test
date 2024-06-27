import React, { useContext, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskList = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.name}</li>
          ))}
        </ul>
      ) : (
        <p className="emptyMessage">Nothing in the Task List !!!</p>
      )}
    </div>
  );
};

export default TaskList;
