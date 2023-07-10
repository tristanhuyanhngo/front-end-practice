import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Front-end! " },
    { id: 2, title: "We love Easy Front-end! " },
    { id: 3, title: "They love Easy Front-end! " },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Hooks - useState</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <h2>ColorBox</h2>
      <ColorBox />
      <h2>TodoList</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
