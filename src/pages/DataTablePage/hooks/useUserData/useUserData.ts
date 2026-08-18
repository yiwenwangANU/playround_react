import useSWR from "swr";
import axios from "axios";

const useUserData = (baseUrl: string, skip: number, limit: number) => {
  const url = `${baseUrl}?skip=${skip}&limit=${limit}`;
  const fetcher = async () => {
    const response = await axios.get(url);
    const { users, total } = response.data;
    return { users, total };
  };
  return useSWR(url, fetcher);
};

export default useUserData;
