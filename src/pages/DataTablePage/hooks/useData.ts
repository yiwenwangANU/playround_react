import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

const BASE_URL = "https://dummyjson.com/users";

const fetcher = async (skip: number, limit: number) => {
  const url = `${BASE_URL}/?skip=${skip}&limit=${limit}`;
  const response = await axios.get(url);
  return response.data;
};

const useData = (skip: number, limit: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ["data", skip, limit],
    queryFn: () => fetcher(skip, limit),
  });

  return { data };
};

export default useData;
