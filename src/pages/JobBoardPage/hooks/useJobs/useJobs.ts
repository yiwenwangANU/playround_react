import useSWR from "swr";
import axios from "axios";

const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";

const useJobs = () => {
  const fetcher = async () => {
    const response = await axios.get<number[]>(URL);
    return response.data;
  };

  return useSWR<number[]>(URL, fetcher);
};

export default useJobs;
