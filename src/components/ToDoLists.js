import React, { useState } from 'react'

const ToDoLists = () => {

    const [tasks, setTasks] = useState(["Eat the breakfast", "Take a shower", " Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange (event) {
        setNewTask(event.target.value);
    }

    function addTasks (){
      
      setTasks([...tasks, newTask]);
      setNewTask("");

    }

    function deletetasks (index){

      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);

    }

    function moveTasksUp (index){
      if(index === 0){
        return;
      }
      const newTasks = [...tasks];
      const [removedTask] = newTasks.splice(index, 1);
      newTasks.splice(index - 1, 0, removedTask);
      setTasks(newTasks);

    }

    function moveTasksDown (index){
      if(index === tasks.length - 1){
        return;
      }
      const newTasks = [...tasks];
      const [removedTask] = newTasks.splice(index, 1);
      newTasks.splice(index + 1, 0, removedTask);
      setTasks(newTasks);
    }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>

        <input
        type='text'
        placeholder='Add a task'
        value={newTask}
        onChange={handleInputChange}
        />

       <button
       className='add-button'
       onClick={addTasks} >
        Add Task
       </button>    

       <ol>
         {tasks.map((task, index) => ( 
            <li key={index}>
                <span className='text'>{task}</span>
                <button 
                className='delete-button'
                onClick={() => deletetasks(index)}
                >Delete 
                </button>

                <button 
                className='move-up-button'
                onClick={() => moveTasksUp(index)}
                > 👆
                </button>

                <button 
                className='move-down-button'
                onClick={() => moveTasksDown(index)}
                > 👇
                </button>
            </li>
         ))}
        </ol>    
    
    
    </div>
  )
}

export default ToDoLists
