import { useState, useEffect } from 'react'
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './styles.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos((curTodos) => {
      return [
        ...curTodos,
        { id:crypto.randomUUID(), title, completed: false },
      ]
    })

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(curTodos => {
      return curTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }; 
        }

        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(curTodos => {
      return curTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
       />
    </>
  )
}

export default App
