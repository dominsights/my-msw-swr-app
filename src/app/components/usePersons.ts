import useSWR from "swr";
import { Person } from "./Person";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function usePersons() {
  const {
    data,
    isLoading: loading,
    error,
  } = useSWR<Person[]>("/api/persons", fetcher);

  console.log("hook was called");
  console.log(data);
  
  return { data, loading, error };
}