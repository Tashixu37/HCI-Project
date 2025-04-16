import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTask = (task) => {
    axios.post('http://localhost:5000/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
