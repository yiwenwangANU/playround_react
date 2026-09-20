import { useState, type FC } from "react";
import clsx from "clsx";
import { Star } from "lucide-react";

interface Props {
  startRate: number;
  maxStar: number;
  onClickStar: (star: number) => void;
}

const StarRating: FC<Props> = ({ startRate, maxStar, onClickStar }) => {
  const [hoverStar, setHoverStar] = useState<number>(0);
  return (
    <div className="flex">
      {Array.from({ length: maxStar }, (_, i) => (
        <Star
          className={clsx({
            "text-amber-500":
              (hoverStar && i < hoverStar) || (!hoverStar && i < startRate),
          })}
          key={i}
          onClick={() => onClickStar(i + 1)}
          onPointerEnter={() => setHoverStar(i + 1)}
          onPointerLeave={() => setHoverStar(0)}
        />
      ))}
    </div>
  );
};

export default StarRating;
