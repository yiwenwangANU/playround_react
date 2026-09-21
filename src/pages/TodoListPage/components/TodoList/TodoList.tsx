import type { FC } from "react";
import { deleteTodo, useTodoStore } from "../../store/useTodoStore";

const TodoList: FC = () => {
  const todoList = useTodoStore((state) => state.todoList);

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          {todo.content}
          <button
            className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
