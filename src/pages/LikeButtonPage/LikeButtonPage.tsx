import { useState, type FC } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import useLike from "./hooks/useLike";
import Button from "../../components/Button";

const URL = "https://questions.greatfrontend.com/api/questions/like-button";

const LikeButtonPage: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const { trigger, isMutating, error } = useLike(URL);
  const handleClick = () => {
    trigger(
      { action: liked ? "unlike" : "like" },
      { onSuccess: () => setLiked((prev) => !prev) },
    );
  };

  return (
    <>
      <Button variant={liked ? "secondary" : "primary"} onClick={handleClick}>
        {isMutating ? (
          <LoaderCircle className="mr-1 h-5 w-5 animate-spin" />
        ) : (
          <Heart />
        )}
        Like
      </Button>
      {error && <div className="text-red-500">{error.message}</div>}
    </>
  );
};

export default LikeButtonPage;
