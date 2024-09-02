import "./TodoTasks.css";
import { useState } from 'react';


export default function TodoTasks() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
    ]);
    
    const tasksList = tasks.map((task) => {
        return (
            <div key={task.id} className="taskContainer">
                <li key={task.id} className="task">
                    {task.name}
                </li>
                <hr/>
                <div className="controlButtons">
                    <button onClick={() => {deleteTaskHandler(task.id)}}>
                        Delete
                    </button>
                    <button onClick={() => {deleteTaskHandler(task.id)}}>
                        Delete
                    </button>
                </div>
            </div>
        )
    })

    let nextID = tasks.length + 1;
    function addTaskHandler() {
        if (newTask.replace(/\s/g, '') === '') {
            return
        }
        setTasks([...tasks, {id: nextID, name: newTask}])
        setNewTask('')
    }

    function deleteTaskHandler(id) {
        setTasks(tasks.filter((task) => {
            return task.id !== id;
        }))
    }

    return (
        <div className="todoContainer">
            <div className="addTask">
                <input value={newTask} type="text" onChange={(event) => {
                    setNewTask(event.target.value)}
                }/>
                <button onClick={addTaskHandler}>Add Task</button>
            </div>
            
            <div className="todoTasks">
                <h2>Tasks</h2>
                {tasksList}
            </div>
        </div>
    )
}