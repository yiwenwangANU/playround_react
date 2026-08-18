import { useState, type FC } from "react";

const TemperatureConverterPage: FC = () => {
  const [celsius, setCelsius] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = e.target.valueAsNumber;
    const fahrenheit = Number(((celsius * 9) / 5 + 32).toFixed(2));
    setCelsius(celsius);
    setFahrenheit(fahrenheit);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = e.target.valueAsNumber;
    const celsius = Number((((fahrenheit - 32) * 5) / 9).toFixed(2));
    setCelsius(celsius);
    setFahrenheit(fahrenheit);
  };

  return (
    <div className="mx-auto flex w-fit gap-2">
      <div className="flex flex-col items-center gap-2">
        <input
          id="celsius"
          type="number"
          onChange={handleCelsiusChange}
          value={celsius !== null ? celsius : undefined}
          className="border border-black px-1 py-0.5"
        />
        <label htmlFor="celsius">Celsius</label>
      </div>
      =
      <div className="flex flex-col items-center gap-2">
        <input
          className="border border-black px-1 py-0.5"
          value={fahrenheit !== null ? fahrenheit : undefined}
          id="fahrenheit"
          type="number"
          onChange={handleFahrenheitChange}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </div>
  );
};

export default TemperatureConverterPage;
