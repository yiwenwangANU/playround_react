import axios from "axios";
import useSWRMutation from "swr/mutation";
import type { Schema } from "../../Test";

const URL = "https://questions.greatfrontend.com/api/questions/contact-form";

const sendRequest = async (url: string, { arg }: { arg: Schema }) => {
  const response = await axios.post(url, arg);
  return response.data;
};

const useCreateContact = () => useSWRMutation(URL, sendRequest);

export default useCreateContact;
