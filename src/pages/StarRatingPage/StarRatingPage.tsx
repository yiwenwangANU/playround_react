import { useState, type FC } from "react";
import { Star } from "lucide-react";

const MAX_STARS = 5;

const StarRatingPage: FC = () => {
  const [hoverRate, setHoverRate] = useState<number>(0);
  const [rate, setRate] = useState<number>(3);

  return Array.from({ length: MAX_STARS }, (_, i) => (
    <Star
      key={i}
      onMouseEnter={() => setHoverRate(i + 1)}
      onMouseLeave={() => setHoverRate(0)}
      onClick={() => setRate(i + 1)}
      fill={
        (hoverRate && hoverRate > i) || (!hoverRate && rate > i)
          ? "orange"
          : "none"
      }
      className="inline"
    />
  ));
};

export default StarRatingPage;
