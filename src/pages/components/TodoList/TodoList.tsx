import { deleteTodo, useTodoStore } from "@/store/useTodoStore";
import type { FC } from "react";

const TodoList: FC = () => {
  const todoList = useTodoStore((state) => state.todoList);

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.content}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
