import { TodoItem } from "./TodoItem";

export function ToDoList({ todos, toggleTodo, deleteToDo }: any) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo: any) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteToDo={deleteToDo}
          />
        );
      })}
    </ul>
  );
}
