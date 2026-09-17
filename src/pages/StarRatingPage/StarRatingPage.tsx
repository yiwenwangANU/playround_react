import { useState, type FC } from "react";
import StarRating from "./components/StarRating/StarRating";

const STARTING_STAR = 3;
const MAX_STAR = 5;

const StarRatingPage: FC = () => {
  const [stars, setStars] = useState<number>(STARTING_STAR);
  const handleSetStar = (stars: number) => {
    setStars(stars);
    console.log("stars: " + stars);
  };
  return (
    <StarRating stars={stars} onSetStar={handleSetStar} maxStars={MAX_STAR} />
  );
};

export default StarRatingPage;
