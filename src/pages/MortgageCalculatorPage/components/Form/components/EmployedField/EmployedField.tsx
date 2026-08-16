import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

const EmployedField: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name: "employed", control });

  return (
    <>
      <label>
        Employed
        <input
          type="radio"
          value="employed"
          name="employed"
          checked={field.value === true}
          onChange={() => field.onChange(true)}
        />
      </label>
      <label>
        Unemployed
        <input
          type="radio"
          value="unemployed"
          name="employed"
          checked={field.value === false}
          onChange={() => field.onChange(false)}
        />
      </label>
      {errors.employed && (
        <span className="col-span-2 text-red-500">
          {errors.employed.message}
        </span>
      )}
    </>
  );
};

export default EmployedField;
