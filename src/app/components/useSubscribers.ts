import useSWR from "swr";
import { Subscriber } from "../models/Subscriber";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function usePersons() {
  const {
    data,
    isLoading: loading,
    error,
  } = useSWR<Subscriber[]>("/api/subscribers", fetcher);
  
  return { data, loading, error };
}