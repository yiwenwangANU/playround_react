import axios from "axios";

const updateLike = async (payload: "like" | "unlike") => {
  const response = await axios.post(import.meta.env.VITE_LIKE_BUTTON_URL, {
    action: payload,
  });
  return response.data;
};

export default updateLike;
