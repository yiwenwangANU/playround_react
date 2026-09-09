import { v4 as uuid } from "uuid";
import { create } from "zustand";

type Todo = {
  id: string;
  content: string;
};

type TodoListStore = {
  todoList: Todo[];
};

export const todoListStore = create<TodoListStore>(() => ({
  todoList: [],
}));

export const addTodo = (content: string) => {
  todoListStore.setState((prev) => ({
    todoList: [...prev.todoList, { id: uuid(), content }],
  }));
};

export const editTodo = (id: string, content: string) => {
  todoListStore.setState((prev) => ({
    todoList: prev.todoList.map((todo) =>
      todo.id === id ? { ...todo, content } : todo,
    ),
  }));
};

export const deleteTodo = (id: string) => {
  todoListStore.setState((prev) => ({
    todoList: prev.todoList.filter((todo) => todo.id !== id),
  }));
};
