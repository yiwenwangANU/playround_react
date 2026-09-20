import { useMutation } from "@tanstack/react-query";
import updateLike from "../utils/updateLike";

const useUpdateLike = () =>
  useMutation({
    mutationFn:  updateLike,
  });

export default useUpdateLike;
