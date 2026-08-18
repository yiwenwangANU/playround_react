import axios from "axios";
import useSWR from "swr";

const useUserDate = (baseUrl: string, skip: number, limit: number) => {
  const url = `${baseUrl}?skip=${skip}&limit=${limit}`;
  const fetcher = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  return useSWR(url, fetcher);
};

export default useUserDate;
