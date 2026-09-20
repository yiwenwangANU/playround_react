import { create } from "zustand";
import { v4 as uuid } from "uuid";

const INITIAL_LIST = [
  { id: "0", content: "content 1" },
  { id: "1", content: "content 2" },
  { id: "2", content: "content 3" },
];

const useTodoStore = create(() => ({ todoList: INITIAL_LIST }));

const addTodo = (newContent: string) => {
  useTodoStore.setState((prev) => ({
    todoList: [...prev.todoList, { id: uuid(), content: newContent }],
  }));
};

const editTodo = (id: string, content: string) => {
  useTodoStore.setState((prev) => ({
    todoList: prev.todoList.map((todo) =>
      todo.id === id ? { ...todo, content } : todo,
    ),
  }));
};

const deleteTodo = (id: string) => {
  useTodoStore.setState((prev) => ({
    todoList: prev.todoList.filter((todo) => todo.id !== id),
  }));
};

export { useTodoStore, addTodo, editTodo, deleteTodo };
