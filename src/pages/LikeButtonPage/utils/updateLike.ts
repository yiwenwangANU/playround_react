import axios from "axios";

type LikePayLoad = {
  action: "like" | "unlike";
};

const updateLike = async (payload: LikePayLoad) => {
  const response = await axios.post(
    import.meta.env.VITE_LIKE_BUTTON_URL,
    payload,
  );
  return response.data;
};

export default updateLike;
