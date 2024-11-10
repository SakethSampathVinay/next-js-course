"use client";
import useSWR from "swr";

// useEffect hook
// swr, useSwr hook
// with loading state

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (isLoading) return <h3>Loading....</h3>;
  if (error) return <div>Error....</div>;

  return (
    <div>
      <h1>Client Side Data Fetching</h1>
      <ul>
        {data && data?.users && data?.users.length > 0
          ? data.users.map((user) => (
              <li className="mt-5 cursor-pointer">{user.firstName}</li>
            ))
          : null}
      </ul>
    </div>
  );
}
