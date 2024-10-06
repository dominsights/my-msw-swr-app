"use client";
import React from "react";
import useSubscribers from "./useSubscribers";
import SubscriberListItem from "./SubscriberListItem";

export default function Demo() {
  const { data } = useSubscribers();

  return (
    <>
      {data ? (
        <ul>
          {data?.map((s, i) => <SubscriberListItem key={i} subscriber={s} />)}
        </ul>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
