import useUserData from "@/pages/DataTablePage/hooks/useUserData";
import type { FC } from "react";
import { useSearchParams } from "react-router";

const PaginationButtons: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);
  const { total, isPending } = useUserData({ skip, limit });

  const handleClickPrev = () => {
    const newSkip = Math.max(0, skip - limit);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("skip", String(newSkip));
      return next;
    });
  };

  const handleClickNext = () => {
    const newSkip = Math.min(total, skip + limit);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("skip", String(newSkip));
      return next;
    });
  };
  return (
    <>
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-30"
        onClick={handleClickPrev}
        disabled={skip - limit < 0 || isPending}
      >
        Prev
      </button>
      <div className="py-0.5">
        Page {skip / limit + 1} of {Math.ceil(total / limit)}
      </div>
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-30"
        onClick={handleClickNext}
        disabled={skip + limit >= total || isPending}
      >
        Next
      </button>
    </>
  );
};

export default PaginationButtons;
