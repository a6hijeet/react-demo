import { useState } from "react"


function ToDo() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const [newTask, setNewTask] = useState("");


  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
    
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
   // setTasks(tasks.filter((_,i) => i !==index));
  }
  const moveTaskUp = (index) => {
    if (index > 0) {
      const ut = [...tasks];

      [ut[index], ut[index-1]] = [ut[index-1], ut[index]];

      setTasks(ut);
    }
  }
  const moveTaskDown = (index) => {
    if (index < tasks.length -1) {
      const ut =  [...tasks];

      [ut[index], ut[index + 1]] = [ut[index+1], ut[index]];

      setTasks(ut);
    }
  }

  return(
  <div className="todo-wrapper">
    <div className="todo-form">
      <h1>To Do list</h1>
      <input type="text" placeholder="Enter a task..."
      value={newTask} onChange={(e) => handleInputChange(e)}/>
      <button onClick={addTask}>Add</button>
    </div>
    <div className="todo-list">
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>Up</button>
            <button onClick={() => moveTaskDown(index)}>Down</button>
          </li> 
      )}
      </ol>
    </div>
  </div>)
}

export default ToDo