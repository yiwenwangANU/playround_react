import useSWRMutation from "swr/mutation";
import axios from "axios";
import type { Schema } from "../../ContactFormPage";

const createMessage = async (url: string, { arg }: { arg: Schema }) => {
  const response = await axios.post(url, arg);
  return response.data;
};

const useCreateMessage = (url: string) => useSWRMutation(url, createMessage);

export default useCreateMessage;
