import { useState, type FC } from "react";
import useTodo from "./hooks/useTodo";

const TodoListPage: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { todoList, addTodo, deleteTodo } = useTodo();

  return (
    <div className="mx-auto w-fit">
      <header className="text-3xl font-bold">Todo List</header>
      <main>
        <input
          className="border border-black px-0.5"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Add Your Task"
        />
        <button
          className="py-0.6 ml-2 cursor-pointer rounded border border-gray-400 bg-gray-200 px-2"
          onClick={() => {
            if (!todo) return;
            addTodo(todo);
            setTodo("");
          }}
        >
          Submit
        </button>
        <ul className="mt-2 list-inside list-disc space-y-1">
          {todoList.map((todo) => (
            <li key={todo.id}>
              <span>{todo.content}</span>
              <button
                className="py-0.6 ml-2 cursor-pointer rounded border border-gray-400 bg-gray-200 px-2"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TodoListPage;
