import { useState, type FC } from "react";
import type { Schema } from "./generateTableSchema";
import Form from "./components/Form/Form";
import Table from "./components/Table";

const GenerateTablePage: FC = () => {
  const [table, setTable] = useState<Schema | null>(null);

  return (
    <>
      <Form
        onSubmit={(data) => {
          console.log(data);
          setTable(data);
        }}
      />
      {table && <Table table={table} />}
    </>
  );
};

export default GenerateTablePage;
