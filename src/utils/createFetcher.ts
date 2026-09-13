import axios from "axios";
import type z from "zod";

const createFetcher =
  <T extends z.ZodType>(schema: T, baseURL: string) =>
  async (url: string) => {
    const response = await axios.get<unknown>(url, { baseURL });
    const data = schema.parse(response.data);
    return data;
  };

export default createFetcher;
