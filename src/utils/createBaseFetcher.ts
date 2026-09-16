import axios from "axios";
import { z } from "zod";

const createBaseFetcher =
  <T extends z.ZodType>(schema: T, baseURL: string) =>
  async (url: string) => {
    const response = await axios.get<unknown>(url, { baseURL });
    const data = schema.parse(response.data);
    return data;
  };

export default createBaseFetcher;
