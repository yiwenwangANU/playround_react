import { userQuery } from "@/services/useUsers";
import { noop, type QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router";

const DataTableLoader =
  (queryClient: QueryClient) =>
  ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const skip = Number(url.searchParams.get("skip") ?? 0);
    const limit = Number(url.searchParams.get("limit") ?? 5);
    void queryClient.query(userQuery({ skip, limit })).catch(noop);
    return null;
  };

export default DataTableLoader;
