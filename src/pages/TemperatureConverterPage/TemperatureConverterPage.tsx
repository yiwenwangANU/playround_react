import type { FC } from "react";
import Converter from "./components/Converter";

const TemperatureConverterPage: FC = () => (
  <div className="mx-auto mt-10 w-fit">
    <Converter />
  </div>
);

export default TemperatureConverterPage;
