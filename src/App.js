import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[tasks, setTasks] = useState([
    "Go shopping", "Eat food", "drink water"
  ])

  const[newTask, setNewTask] = useState()

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setNewTask('');
  }


  const taskNodes = tasks.map( (task) => {
    return (
      <li><span>{task}</span></li>
    )
  })

  return (
    <>
      <h1>To-Do list</h1>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a New Task</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
        <input type='submit' value='Save New Task'/>
      </form>
    </>
  );
}

export default App;
