import { useState, type FC } from "react";
import { Star } from "lucide-react";
import { clsx } from "clsx";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

const StarRateField: FC = () => {
  const [hoverRate, setHoverRate] = useState<number>(0);

  const { control } = useFormContext<Schema>();
  const { field } = useController({ name: "starRate", control });

  return (
    <div className="col-span-2">
      {Array.from({ length: 5 }, (_, i) => (
        <button
          type="button"
          key={i}
          aria-label={`Rate ${i + 1} star`}
          onClick={() => field.onChange(i + 1)}
          onMouseEnter={() => setHoverRate(i + 1)}
          onMouseLeave={() => setHoverRate(0)}
        >
          <Star
            className={clsx("inline", {
              "text-yellow-500": hoverRate > i || (!hoverRate && field.value > i),
            })}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRateField;
