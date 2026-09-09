import { create } from "zustand";
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  content: string;
};

type todoListStore = {
  todoList: Todo[];
};

export const todoListStore = create<todoListStore>(() => ({
  todoList: [],
}));

export const addTodo = (content: string) => {
  todoListStore.setState((state) => ({
    todoList: [...state.todoList, { id: uuid(), content }],
  }));
};

export const editTodo = (id: string, content: string) => {
  todoListStore.setState((state) => ({
    todoList: state.todoList.map((todo) =>
      todo.id === id ? { ...todo, content } : todo,
    ),
  }));
};

export const deleteTodo = (id: string) => {
  todoListStore.setState((state) => ({
    todoList: state.todoList.filter((todo) => todo.id !== id),
  }));
};
