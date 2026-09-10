import type { FC } from "react";
import useConvert from "./hooks/useConvert";

const Converter: FC = () => {
  const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } =
    useConvert();

  return (
    <div className="flex gap-2">
      <div className="flex w-fit flex-col items-center">
        <input
          id="celsius"
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          className="border border-black px-0.5"
        />
        <label htmlFor="celsius">Celsius</label>
      </div>
      =
      <div className="flex w-fit flex-col items-center">
        <input
          id="fahrenheit"
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="border border-black px-0.5"
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </div>
  );
};

export default Converter;
