import type { FC } from "react";

interface Props {
  skip: number;
  limit: number;
  total: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const PrevNextButtons: FC<Props> = ({
  skip,
  limit,
  total,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className="flex gap-2">
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-30"
        onClick={onClickPrev}
        disabled={skip < limit}
      >
        Prev
      </button>
      <div className="py-0.5">
        Page {skip / limit + 1} of {Math.ceil(total / limit)}
      </div>
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-30"
        onClick={onClickNext}
        disabled={skip + limit >= total}
      >
        Next
      </button>
    </div>
  );
};

export default PrevNextButtons;
