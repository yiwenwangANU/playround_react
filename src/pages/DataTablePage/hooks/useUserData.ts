import createBaseFetcher from "@/utils/createBaseFetcher";
import { useQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { schema } from "./schema";

interface Query {
  skip: number;
  limit: number;
}

const fetcher = createBaseFetcher(
  schema,
  import.meta.env.VITE_DATATABLE_BASE_URL,
);

const useUserData = (query: Query) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["userData", query],
    queryFn: () => fetcher(`?${queryString.stringify(query)}`),
  });

  const users =
    data?.users.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      age: user.age,
      occupation: user.company.title,
    })) ?? [];

  return { users, total: data?.total ?? 0, isPending, error };
};

export default useUserData;
