import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5009/api/tasks");
    setTasks(await res.json());
  };
  const addTask = async (data) => {
    await fetch("http://localhost:5009/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    fetchTasks();
  };

  const markDone = async (id) => {
    await fetch(`http://localhost:5009/api/tasks/${id}/done`, {
      method: "PATCH",
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5009/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTasks();
    };
    fetchData();
  }, []);

  return (
    <div className="flex mx-10 mt-10 p-20">
      <AddTask onAdd={addTask} />
      <hr className="mx-20 border-2 h-157 text-blue-900" />
      <Task tasks={tasks} onDone={markDone} onDelete={deleteTask}/>
    </div>
  );
};

export default App;
