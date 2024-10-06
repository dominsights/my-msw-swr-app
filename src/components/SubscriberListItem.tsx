import React from 'react'
import { Subscriber } from '../lib/models/subscriber'

export default function SubscriberListItem({subscriber} : {subscriber: Subscriber}) {
  return (
    <li>{subscriber.name} {subscriber.age}</li>
  )
}
