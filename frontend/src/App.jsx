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
    fetchTasks();
  }, []);

  return (
    <div className="p-4 md:p-10 lg:p-25 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <AddTask onAdd={addTask} />
        <div className="hidden lg:block border-r-2 border-blue-900"></div>
        <Task tasks={tasks} onDone={markDone} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;