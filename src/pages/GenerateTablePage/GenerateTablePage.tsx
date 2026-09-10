import { useState, type FC } from "react";
import Form from "./components/Form/Form";
import { type Schema } from "./generateTableSchema";
import Table from "./components/Table";

const GenerateTablePage: FC = () => {
  const [table, setTable] = useState<Schema | null>(null);
  const handleSubmit = (data: Schema) => {
    setTable(data);
  };

  return (
    <div className="mx-auto w-fit space-y-2">
      <Form onSubmit={handleSubmit} />
      {table && <Table rows={table.rows} cols={table.cols} />}
    </div>
  );
};

export default GenerateTablePage;
