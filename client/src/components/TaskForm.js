import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TaskForm = () => {
  const { addTask, fetchTasks  } = useContext(TaskContext);
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      alert("Task name cannot be empty");
      return;
    }
    addTask({ name: taskName });
    fetchTasks();
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
