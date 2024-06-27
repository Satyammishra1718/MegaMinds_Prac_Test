import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskList from '../src/components/TaskList';
import TaskForm from '../src/components/TaskForm';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import '../src/assets/styles/App.css';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />
      <Route 
        path="/register" 
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } 
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <TaskDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const TaskDashboard = () => (
  <div className="App">
    <h1>Task Manager</h1>
    <TaskForm />
    <TaskList />
  </div>
);

export default App;
