import createBaseFetcher from "@/utils/createBaseFetcher";
import queryString from "query-string";
import { schema } from "./schema";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Query {
  skip: number;
  limit: number;
}

const useFetchData = (query: Query) => {
  const fetcher = createBaseFetcher(
    schema,
    import.meta.env.VITE_DATATABLE_BASE_URL,
  );
  const { data } = useSuspenseQuery({
    queryKey: ["data", query],
    queryFn: () => fetcher(`?${queryString.stringify(query)}`),
  });
  const users = data.users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    age: user.age,
    occupation: user.company.title,
  }));

  return { users, total: data.total };
};

export default useFetchData;
