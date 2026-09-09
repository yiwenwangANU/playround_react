import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { Schema } from "../ContactFormPage";

const URL = "https://questions.greatfrontend.com/api/questions/contact-form";

const createMessage = async (data: Schema) => {
  const response = await axios.post(URL, data);
  return response.data;
};

const useCreateMessage = () =>
  useMutation({
    mutationFn: createMessage,
  });

export default useCreateMessage;
