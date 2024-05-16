import React, { useState } from 'react';
import './TodoLists.css'; // Ensure this path is correct

const TodoLists = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      name: newTask
    };

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-name">{task.name}</span>
            <button 
              onClick={() => handleDeleteTask(task.id)} 
              aria-label={'Delete ' + task.name}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;