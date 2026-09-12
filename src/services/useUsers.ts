import createFetcher from "@/utils/createFetcher";
import { useSuspenseQuery } from "@tanstack/react-query";
import queryString from "query-string";
import { z } from "zod";

interface Query {
  skip: number;
  limit: number;
}

const schema = z.object({
  users: z.array(
    z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
      age: z.number(),
      company: z.object({
        title: z.string(),
      }),
    }),
  )
});

const fetcher = createFetcher(schema, import.meta.env.VITE_USER_BASE_URL);

const useUsers = (query: Query) => {
  const { data } = useSuspenseQuery({
    queryKey: ["users", query],
    queryFn: () => fetcher(`?${queryString.stringify(query)}`),
  });

  return data.users.map((user) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    age: user.age,
    occupation: user.company.title,
  }));
};

export default useUsers;
