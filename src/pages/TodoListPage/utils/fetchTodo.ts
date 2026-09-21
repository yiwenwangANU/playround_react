import axios from "axios";
import { z } from "zod";

const schema = z.object({
  id: z.string(),
  content: z.string(),
  createdAt: z.iso.date(),
  updatedAt: z.iso.date(),
  createdBy: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

const fetchTodoList = async () => {
  const response = await axios.get("/api/todoList", {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  });
  return schema.parse(response.data);
};

export default fetchTodoList;
