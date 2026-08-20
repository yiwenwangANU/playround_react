import axios from "axios";
import useSWR from "swr";

const URL = "https://hacker-news.firebaseio.com/v0/item";

const useJobDetails = (ids: number[] | undefined) => {
  const fetcher = async () => {
    const responses = await Promise.all(
      ids!.map((id) => axios.get(`${URL}/${id}.json`)),
    );
    return responses.map((res) => res.data);
  };

  return useSWR(ids ? [URL, ids] : null, fetcher);
};

export default useJobDetails;
