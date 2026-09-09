import { useState } from "react";
import { v4 as uuid } from "uuid";

const INITIAL_TODO: Todo[] = [
  {
    id: uuid(),
    content: "Walk the dog",
  },
  { id: uuid(), content: "Water the plants" },
  { id: uuid(), content: "Wash the dishes" },
];

type Todo = {
  id: string;
  content: string;
};

const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>(INITIAL_TODO);

  const addTodo = (content: string) => {
    setTodoList((prev) => [...prev, { id: uuid(), content }]);
  };

  const editTodo = (id: string, content: string) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, content } : todo)),
    );
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todoList, addTodo, editTodo, deleteTodo };
};

export default useTodo;
