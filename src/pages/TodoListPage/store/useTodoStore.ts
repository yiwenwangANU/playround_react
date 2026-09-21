import { v4 as uuid } from "uuid";
import { create } from "zustand";

const INITIAL_LIST = [
  {
    id: "0",
    content: "content 0",
  },
  {
    id: "1",
    content: "content 1",
  },
  {
    id: "2",
    content: "content 2",
  },
];

const useTodoStore = create(() => ({
  todoList: INITIAL_LIST,
}));

const addTodo = (content: string) =>
  useTodoStore.setState((prev) => ({
    todoList: [...prev.todoList, { id: uuid(), content }],
  }));

const editTodo = (id: string, content: string) =>
  useTodoStore.setState((prev) => ({
    todoList: prev.todoList.map((todo) =>
      todo.id === id ? { ...todo, content } : todo,
    ),
  }));

const deleteTodo = (id: string) =>
  useTodoStore.setState((prev) => ({
    todoList: prev.todoList.filter((todo) => todo.id !== id),
  }));

export { useTodoStore, addTodo, editTodo, deleteTodo };
