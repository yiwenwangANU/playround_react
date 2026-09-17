import { useEffect, useState, type FC } from "react";
import clsx from "clsx";

const LIGHTS = [
  {
    color: "red",
    time: 4000,
    className: "bg-rose-500",
    position: 0,
  },
  { color: "green", time: 3000, className: "bg-amber-500", position: 2 },
  { color: "yellow", time: 500, className: "bg-green-500", position: 0 },
];

const TrafficLightPage: FC = () => {
  const [lightIndex, setLightIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLightIndex((prev) => (prev + 1) % LIGHTS.length);
    }, LIGHTS[lightIndex].time);
    return () => clearTimeout(timer);
  }, [lightIndex]);

  return (
    <div className="flex w-fit gap-2 rounded-2xl bg-black p-4">
      {LIGHTS.map((_, i) => (
        <div
          className={clsx(
            "h-10 w-10 rounded-full",
            LIGHTS[lightIndex].className,
            {
              "opacity-30": LIGHTS[lightIndex].position === i,
            },
          )}
        />
      ))}
    </div>
  );
};

export default TrafficLightPage;
