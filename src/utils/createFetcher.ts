import axios from "axios";
import { z } from "zod";

const createFetcher =
  <T extends z.ZodType>(schema: T, baseURL: string) =>
  async (url: string): Promise<z.infer<T>> => {
    const response = await axios.get(url, { baseURL });
    const data = schema.parse(response.data);

    return data;
  };

export default createFetcher;
