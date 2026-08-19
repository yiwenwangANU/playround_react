import { useState, type FC } from "react";

const DATA = ["Walk the dog", "Water the plants", "Wash the dishes"];

const TodoListPage: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>(DATA);

  const handleSubmit = () => {
    if (!input) return;
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <div>
      <div className="text-4xl font-bold">Todo List</div>
      <input
        className="border border-black px-1 py-0.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="cursor-pointer border border-gray-400 bg-gray-200 px-2 py-0.5"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>
            {todo}
            <button
              onClick={() => {
                setTodoList((prev) => prev.filter((_, index) => i !== index));
              }}
              className="cursor-pointer border border-gray-400 bg-gray-200 px-2 py-0.5"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;
