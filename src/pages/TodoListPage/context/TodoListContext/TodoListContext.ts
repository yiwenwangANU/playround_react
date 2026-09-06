import { createContext, useContext } from "react";

export type Todo = {
  id: string;
  content: string;
};

type TodoListContextType = {
  todoList: Todo[];
  addTodo: (content: string) => void;
  editTodo: (id: string, content: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoListContext = createContext<TodoListContextType | null>(null);

export const useTodoList = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("toDoListContext used outside provider!");
  }
  return context;
};
