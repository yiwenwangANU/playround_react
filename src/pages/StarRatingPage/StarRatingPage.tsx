import { useState, type FC } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";

const MAX_STARS = 5;
const INITIAL_STAR = 3;

const StarRatingPage: FC = () => {
  const [star, setStar] = useState<number>(INITIAL_STAR);
  const [hoverStar, setHoverStar] = useState<number>(0);

  return (
    <main>
      <div className="flex">
        {Array.from({ length: MAX_STARS }, (_, i) => (
          <button
            onClick={() => setStar(i + 1)}
            onPointerEnter={() => setHoverStar(i + 1)}
            onPointerLeave={() => setHoverStar(0)}
          >
            <Star
              className={clsx({
                "text-amber-500":
                  (hoverStar && i < hoverStar) || (!hoverStar && i < star),
              })}
            />
          </button>
        ))}
      </div>{" "}
      <div>Current Star: {star}</div>
    </main>
  );
};

export default StarRatingPage;
