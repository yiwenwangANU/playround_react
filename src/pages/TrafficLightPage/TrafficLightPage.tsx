import { useEffect, useState, type FC } from "react";

type TrafficLight = {
  color: "red" | "green" | "yellow";
  duration: number;
};

const DATA: TrafficLight[] = [
  { color: "red", duration: 4000 },
  { color: "green", duration: 3000 },
  { color: "yellow", duration: 500 },
];

const LIGHT_SEQUENCE = ["red", "yellow", "green"];

const TrafficLightPage: FC = () => {
  const [index, setIndex] = useState<number>(0);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % DATA.length);
    }, DATA[index].duration);
    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="flex w-fit gap-2 rounded-2xl bg-black px-5 py-2">
      {LIGHT_SEQUENCE.map((light) => (
        <div
          className="h-10 w-10 rounded-full"
          style={{
            backgroundColor: DATA[index].color === light ? light : "gray",
          }}
        />
      ))}
    </div>
  );
};

export default TrafficLightPage;
