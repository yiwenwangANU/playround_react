import Button from "@/components/Button";
import { useState, type FC } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import useUpdateLike from "./hooks/useUpdateLike";

const LikeButtonPage: FC = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const { mutate, data, isPending, error } = useUpdateLike();
  const handleClick = () => {
    mutate(
      { action: liked ? "unlike" : "like" },
      {
        onSuccess: () => {
          setLiked((prev) => !prev);
        },
      },
    );
  };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={handleClick}
        variant={liked ? "secondary" : "primary"}
      >
        {isPending ? (
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Heart className="mr-2 h-4 w-4" />
        )}
        Like
      </Button>
      {error && <div>{error.message}</div>}
      {data && <div>{data.message}</div>}
    </>
  );
};

export default LikeButtonPage;
