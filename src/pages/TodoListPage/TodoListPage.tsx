import type { FC } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList";

const TodoListPage: FC = () => (
  <main className="">
    <Form />
    <TodoList />
  </main>
);

export default TodoListPage;
