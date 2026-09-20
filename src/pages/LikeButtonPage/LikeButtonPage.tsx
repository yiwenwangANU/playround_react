import Button from "@/components/Button";
import { useState, type FC } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import useUpdateLike from "./hooks/useUpdateLike";

const LikeButtonPage: FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const { mutate, data, isPending, error } = useUpdateLike();

  const handleClick = () => {
    mutate(like ? "unlike" : "like", {
      onSuccess: () => setLike((prev) => !prev),
    });
  };
  
  return (
    <>
      <Button
        variant={like ? "secondary" : "primary"}
        onClick={handleClick}
        disable={isPending}
      >
        {
          <span>
            {isPending ? (
              <LoaderCircle className="mr-1 h-4 w-4 animate-spin" />
            ) : (
              <Heart className="mr-1 h-4 w-4" />
            )}
          </span>
        }
        Like
      </Button>
      {data && <div>{data.message}</div>}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default LikeButtonPage;
