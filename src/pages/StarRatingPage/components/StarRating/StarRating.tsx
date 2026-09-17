import { useState, type FC } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";

interface Props {
  maxStars: number;
  stars: number;
  onSetStar: (star: number) => void;
}

const StarRating: FC<Props> = ({ maxStars, stars, onSetStar }) => {
  const [hoverStar, setHoverStar] = useState<number | null>(null);
  return Array.from({ length: maxStars }, (_, i) => (
    <Star
      onPointerEnter={() => setHoverStar(i + 1)}
      onPointerLeave={() => setHoverStar(null)}
      onPointerDown={() => onSetStar(i + 1)}
      className={clsx("inline-block h-5 w-5", {
        "text-amber-500":
          (!hoverStar && i < stars) || (hoverStar && i < hoverStar),
      })}
    />
  ));
};

export default StarRating;
