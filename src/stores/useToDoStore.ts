import { create } from "zustand";

type Todo = {
  id: number;
  content: string;
};

type TodoStore = {
  todoList: Todo[];
  add: (newTodo: Todo) => void;
  remove: (id: number) => void;
  edit: (id: number, newTodo: Todo) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todoList: [],
  add: (newTodo) => {
    set((state) => ({ todoList: [...state.todoList, newTodo] }));
  },
  remove: (id) => {
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    }));
  },
  edit: (id, newTodo) => {
    set((state) => ({
      todoList: state.todoList.map((todo) => (todo.id === id ? newTodo : todo)),
    }));
  },
}));

export default useTodoStore;
