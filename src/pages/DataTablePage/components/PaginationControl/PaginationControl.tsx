import type { FC } from "react";
import Select from "./components/Select";
import PrevNextButtons from "./components/PrevNextButtons";
import { useSearchParams } from "react-router";
import useUserData from "../../hooks/useUserData";

const PaginationControl: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);
  const { total } = useUserData({ skip, limit });

  const handleLimitChange = (newLimit: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("skip", "0");
      next.set("limit", String(newLimit));
      return next;
    });
  };

  const handleSkipChange = (newSkip: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("skip", String(newSkip));
      return next;
    });
  };

  return (
    <div className="flex gap-2">
      <Select onSelect={handleLimitChange} />
      <PrevNextButtons
        skip={skip}
        limit={limit}
        total={total}
        onClickPrev={() => handleSkipChange(Math.max(0, skip - limit))}
        onClickNext={() => handleSkipChange(Math.min(total, skip + limit))}
      />
    </div>
  );
};

export default PaginationControl;
