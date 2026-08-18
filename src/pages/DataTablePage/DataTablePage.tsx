import { useState, type FC } from "react";
import useUserDate from "./hooks/useUserData";
import Table from "./components/Table";
import Select from "./components/Select";
import Button from "../../components/Button";

const URL = "https://dummyjson.com/users";
const DataTablePage: FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const { data, error, isLoading } = useUserDate(URL, skip, limit);

  if (isLoading) return <div>is Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Something went wrong...</div>;

  return (
    <div className="space-y-2">
      <Table users={data.users} />
      <hr />
      <div className="flex items-center gap-2">
        <Select limit={limit} onSelect={setLimit} />
        <Button
          onClick={() => {
            setSkip((prev) => {
              const result = prev - limit;
              return result >= 0 ? result : 0;
            });
          }}
          disabled={skip <= 0}
        >
          Prev
        </Button>
        <span>
          Page {Math.floor(skip / limit) + 1} of {Math.ceil(data.total / limit)}
        </span>
        <Button
          onClick={() => {
            setSkip((prev) => prev + limit);
          }}
          disabled={skip + limit >= data.total}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DataTablePage;
