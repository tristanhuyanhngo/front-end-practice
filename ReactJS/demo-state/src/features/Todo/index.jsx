import TodoList from './components/TodoList';
import { useState } from "react";

function TodoFeature() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",	
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // Clone current array to the new one
    const newTodoList = [...todoList];

    console.log(todo, idx);

    // Toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    // update todo list
    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  }

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  }

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  }

  const renderedTodoList = todoList.filter(todo => filteredStatus === "all" || filteredStatus === todo.status)
  console.log(renderedTodoList);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  )
}

export default TodoFeature;
