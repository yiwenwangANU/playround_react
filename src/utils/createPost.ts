import axios from "axios";

const URL = "https://questions.greatfrontend.com/api/questions/contact-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const createPost = async (formData: FormData) => {
  const response = await axios.post(URL, formData);
  return response;
};

export default createPost;
