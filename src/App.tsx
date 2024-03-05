import { useEffect, useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { ToDoList } from "./components/TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: any) {
    setTodos((currentTodos: any) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id: any, completed: any) {
    setTodos((currentTodos: any) => {
      return currentTodos.map((todo: any) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteToDo(id: any) {
    setTodos((currentTodos: any) => {
      return currentTodos.filter((todo: any) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
    </>
  );
}
