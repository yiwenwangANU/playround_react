import { useMutation } from "@tanstack/react-query";
import updateLike from "../utils/updateLike";

const useUpdateLike = () => {
  return useMutation({
    mutationFn: updateLike,
  });
};

export default useUpdateLike;
