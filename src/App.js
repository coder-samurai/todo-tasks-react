import './App.css';
import TodoTasks from './TodoTasks';


function App() {
  return (
    <div className='App'>
      <div className='titleContainer'>
        <h1>Todo in React!</h1>
      </div>
      <div className='mainContainer'>
        <TodoTasks/>
      </div>
    </div>
  );
}

export default App;