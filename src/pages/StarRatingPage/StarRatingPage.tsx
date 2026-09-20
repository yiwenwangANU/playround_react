import { useState, type FC } from "react";
import StarRating from "./components/StarRating/StarRating";

const INITIAL_RATE = 3;
const StarRatingPage: FC = () => {
  const [rate, setRate] = useState<number>(INITIAL_RATE);
  const handleClickStar = (star: number) => {
    setRate(star);
  };
  return (
    <>
      <StarRating startRate={rate} maxStar={5} onClickStar={handleClickStar} />
      <div>Star Rate {rate}</div>
    </>
  );
};

export default StarRatingPage;
