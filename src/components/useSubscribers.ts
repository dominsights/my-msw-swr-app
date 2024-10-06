import useSWR from "swr";
import { Subscriber } from "../lib/models/Subscriber";
import { Err } from "ts-results";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useSubscribers() {
  const {
    data,
    isLoading: loading,
    error,
  } = useSWR<Subscriber[]>("/api/subscribers", fetcher);

  const addSubscriber = (subscriber: Subscriber) => {
    return Err('not implemented!');
  }
  
  return { data, loading, error, addSubscriber };
}