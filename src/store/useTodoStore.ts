import { v4 as uuid } from "uuid";
import { create } from "zustand";

const DATA: Todo[] = [
  {
    id: "0",
    content: "content 1",
  },
  {
    id: "1",
    content: "content 2",
  },
  {
    id: "2",
    content: "content 3",
  },
];

type Todo = {
  id: string;
  content: string;
};

type TodoList = {
  todoList: Todo[];
};

const useTodoStore = create<TodoList>(() => ({ todoList: DATA }));

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
