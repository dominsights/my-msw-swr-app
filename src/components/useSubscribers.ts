import useSWR from "swr";
import { Subscriber } from "../lib/models/subscriber";
import { Err, Ok, Result } from "ts-results";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useSubscribers() {
  const {
    data,
    isLoading: loading,
    error,
    mutate
  } = useSWR<Subscriber[]>("/api/subscribers", fetcher);

  const addSubscriber = async (subscriber: Subscriber): Promise<Result<string, string>> => {
    subscriber.status = true;
    const response = await fetch("/api/subscribers", {
      method: "POST",
      body: JSON.stringify(subscriber),
    });

    if(response.status === 201) {
      mutate();
      return Ok("New subscriber has been added successfully!");
    }

    return Err(response.statusText);
  }
  
  return { data, loading, error, addSubscriber };
}