import { useState, type FC, type ReactNode } from "react";
import { v4 as uuid } from "uuid";
import { type Todo, TodoListContext } from "./TodoListContext";

interface Props {
  children: ReactNode;
}

const TodoListProvider: FC<Props> = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

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
  return (
    <TodoListContext.Provider
      value={{ todoList, addTodo, editTodo, deleteTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
