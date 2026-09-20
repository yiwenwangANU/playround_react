import { type FC } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const TodoListPage: FC = () => {
  return (
    <main>
      <h1>Todo List</h1>
      <Form />
      <TodoList />
    </main>
  );
};

export default TodoListPage;
