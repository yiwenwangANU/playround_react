import axios from "axios";
import useSWRMutation from "swr/mutation";

type Action = "like" | "unlike";

const sendRequest = async (
  url: string,
  { arg }: { arg: { action: Action } },
) => {
  const response = await axios.post(url, arg);
  return response.data;
};

const useLike = (url: string) => useSWRMutation(url, sendRequest);

export default useLike;
