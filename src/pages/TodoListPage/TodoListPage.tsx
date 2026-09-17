import type { FC } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const TodoListPage: FC = () => (
  <main className="mx-auto w-fit">
    <h1 className="text-2xl font-bold">Todo List</h1>
    <Form />
    <TodoList />
  </main>
);

export default TodoListPage;
