import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Action = {
  action: "like" | "unlike";
};
type Response = {
  message: string;
};

const updateLike = async (action: Action) => {
  const response = await axios.post<Response>(
    import.meta.env.VITE_LIKE_BUTTON_URL,
    action,
  );
  return response.data;
};

const useUpdateLike = () =>
  useMutation({
    mutationFn: updateLike,
  });

export default useUpdateLike;
