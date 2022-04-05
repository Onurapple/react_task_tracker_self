
import React, { useState } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false
    }
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  

  const deleteTask = (deletedTaskId) => {
    return(
      setTasks(tasks.filter((task)=> task.id !== deletedTaskId))
    )
  }

  const toggleDone = (toggleDoneId) =>{
    return(
      setTasks(tasks.map((task)=>{
        return(
          toggleDoneId === task.id ? {...task, isDone: !task.isDone} : task
        )
      }))
    )
  }

  const addTask = (newTask)=>{
    const id = Math.floor(Math.random()*1000 +1);
    const addNewTask = {id, ...newTask};
    setTasks([...tasks, addNewTask]);
  }
    
  const toggleShow = () => setShowAddTask(!showAddTask);
  

  return (
    <div className="container">
    <Header title='TASK TRACKER' toggleShow={toggleShow} showAddTask={showAddTask}/>
    {showAddTask && <AddTasks addTask={addTask}/>}

    {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>) :
    ( <h2 style={{textAlign:'center'}}> NO TASK TO SHOW</h2> )}
    
    
    </div>
  );
}

export default App;
