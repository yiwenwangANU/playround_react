import { useState, type FC } from "react";

const TemperatureConverterPage: FC = () => {
  const [celsius, setCelsius] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const handlesetCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = e.target.valueAsNumber;
    const fahrenheit = Number(((celsius * 9) / 5 + 32).toFixed(2));
    setCelsius(celsius);
    setFahrenheit(fahrenheit);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = e.target.valueAsNumber;
    const celsius = Number((((fahrenheit - 32) / 9) * 5).toFixed(2));
    setFahrenheit(fahrenheit);
    setCelsius(celsius);
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <input
          className="border border-black px-1 py-0.5"
          type="number"
          id="celsius"
          onChange={handlesetCelsiusChange}
          value={celsius !== null ? celsius : undefined}
        />
        <label htmlFor="celsius">Celsius</label>
      </div>
      =
      <div className="flex flex-col items-center">
        <input
          className="border border-black px-1 py-0.5"
          type="number"
          id="fahrenheit"
          onChange={handleFahrenheitChange}
          value={fahrenheit !== null ? fahrenheit : undefined}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </div>
  );
};

export default TemperatureConverterPage;
