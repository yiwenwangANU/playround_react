import { useSuspenseQuery } from "@tanstack/react-query";
import fetchTodoList from "../utils/fetchTodo";

const useTodoList = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["todoList"],
    queryFn: fetchTodoList,
  });
  return data;
};

export default useTodoList;
