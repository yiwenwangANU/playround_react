import { useState, type FC } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import Button from "@/components/Button";
import useUpdateLike from "./hooks/useUpdateLike";

const LikeButtonPage: FC = () => {
  const [like, setLike] = useState<boolean>(false);
  const mutation = useUpdateLike();

  return (
    <div>
      <Button
        variant={like ? "secondary" : "primary"}
        onClick={() => {
          if (like) {
            mutation.mutate(
              { action: "unlike" },
              {
                onSuccess: () => setLike(false),
              },
            );
          }
          if (!like) {
            mutation.mutate(
              { action: "like" },
              { onSuccess: () => setLike(true) },
            );
          }
        }}
      >
        {mutation.isPending ? (
          <LoaderCircle className="mr-1.5 h-4 w-4 animate-spin" />
        ) : (
          <Heart className="mr-1.5 h-4 w-4" />
        )}
        Like
      </Button>
      {mutation.error && (
        <div className="text-rose-500">{mutation.error.message}</div>
      )}
    </div>
  );
};

export default LikeButtonPage;
