import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/assets/styles/index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TaskProvider } from './contexts/TaskContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
       <Router>
        <TaskProvider>
          <App />
        </TaskProvider>
       </Router>
  </>,
);

reportWebVitals();
