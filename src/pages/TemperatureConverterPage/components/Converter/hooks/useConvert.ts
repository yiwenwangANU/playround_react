import { useState } from "react";

const useConvert = () => {
  const [celsius, setCelsius] = useState<number>();
  const [fahrenheit, setFahrenheit] = useState<number>();

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.valueAsNumber;
    setCelsius(data);
    setFahrenheit(+((data * 9) / 5 + 32).toFixed(2));
  };
  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.valueAsNumber;
    setFahrenheit(data);
    setCelsius(+(((data - 32) / 9) * 5).toFixed(2));
  };

  return { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange };
};

export default useConvert;
