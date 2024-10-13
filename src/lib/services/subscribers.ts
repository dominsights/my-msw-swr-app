import { Ok } from "ts-results";
import { Subscriber } from "../models/subscriber";

const subscribers: Subscriber[] = [
  { fullName: "John", email: "john@email.com", status: true },
  { fullName: "Mary", email: "mary@email.com", status: true },
  { fullName: "Ben", email: "ben@email.com", status: false },
];

function getSubscribers() {
  return Promise.resolve(subscribers);
}

function addSubscriber(subscriber: Subscriber) {
  subscriber.status = true;
  subscribers.push(subscriber);
  return Promise.resolve(Ok('ok'))
}

export { getSubscribers, addSubscriber };
