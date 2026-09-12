import { useState, type FC } from "react";
import useUsers from "@/services/useUsers";

const DataTablePage: FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const { id, name, age, occupation } = useUsers({skip, limit});

  return <table></table>;
};

export default DataTablePage;
