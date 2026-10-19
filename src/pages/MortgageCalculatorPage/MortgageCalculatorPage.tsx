import { useState, type FC } from "react";
import Form from "./components/Form";
import type { Schema } from "./schema";
import Mortgage from "./components/Mortgage";

const MortgageCalculatorPage: FC = () => {
  const [mortgage, setMortgage] = useState<Schema | null>(null);
  return (
    <main className="mx-auto w-fit p-5">
      <Form onSubmit={(data) => setMortgage(data)} />
      <Mortgage mortgage={mortgage} />
    </main>
  );
};

export default MortgageCalculatorPage;
