import React, { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Task from './components/Task'

const App = () => {
  const [tasks,setTasks] = useState([]);
  const fetchTasks = async()=> {
    const res = await fetch('http://localhost:5009/api/tasks');
    setTasks(await res.json());
  };
  const addTask = async data => {
    await fetch('/api/tasks', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)
    });
    fetchTasks();
  };
  const markDone = async id => {
    await fetch(`/api/tasks/${id}/done`, { method:'PATCH' });
    fetchTasks();
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchTasks();
    };
    fetchData();
  }, []);
  
  return (
    <div className='flex mx-10 mt-10 p-20'>
      <AddTask onAdd={addTask}/>
      <hr className='mx-20 border-2 h-150 text-blue-900'/>
      <Task tasks={tasks} onDone={markDone}/>
    </div>
  )
}

export default App