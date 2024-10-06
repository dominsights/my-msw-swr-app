import React from 'react'
import { Subscriber } from '../models/Subscriber'

export default function SubscriberListItem({subscriber} : {subscriber: Subscriber}) {
  return (
    <li>{subscriber.name} {subscriber.age}</li>
  )
}
