import { useState } from 'react';
import Task from './Task';
import Header from './Header';
import Delete from './Delete';

const baseTasks = [
  { task: 'Comprar harina, jamón y pan rallado', completed: true },
  { task: 'Hacer croquetas ', completed: true },
  { task: 'Ir al gimnasio', completed: false },
  {
    task: 'estudiar React',
    completed: false,
  },
  {
    task: 'Irme a vivir a Bali',
    completed: false,
  },
];


function App () {
    const[tasks,setTasks] = useState(baseTasks);

  //Agregar Tareas//
  const [newTaskInput, setNewTaskInput] = useState('');

  const addnewTask = (event) => {
    event.preventDefault();
    if(newTaskInput.trim() !== ''){
      const newTask = {
        task:newTaskInput,
        completed:false,
      };
      setTasks([...tasks,newTask]);
      setNewTaskInput('');
    }

    
  };
    
    return (
        <div className='App'>
        <Header/>
            <h2 className='taskList'>Task List</h2>
            {tasks.map((task,index)=> (<Task key = {index} task={task.task} completed={task.completed}/>)
            )}
            <form>
            <input type='text' value={newTaskInput} onChange={(event) => setNewTaskInput(event.target.value)}/>
                <button type='submit' onClick={addnewTask}>Add New Task</button>
                <Delete/>
            </form>
        </div>
        
    );
}

export default App;