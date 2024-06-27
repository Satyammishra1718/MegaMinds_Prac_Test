import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from '../utils/AuthUtils';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const currentUsername = localStorage.getItem('currentUsername');
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const token = getToken();

  const fetchTasks = async () => {

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/task");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const extractData = data[currentUsername] || [];
      setTasks(extractData); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (newTask) => {
    const currentUsername = localStorage.getItem('currentUsername');
    try {
      const response = await fetch("http://localhost:5000/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const extractData = data[currentUsername];
      setTasks([...tasks, extractData]); 
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
