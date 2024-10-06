import { Subscriber } from '@/lib/models/Subscriber';
import { http, HttpResponse } from 'msw'
 
const subscribers: Subscriber[] = [
    { name: "John", age: 30 },
    { name: "Mary", age: 35 },
    { name: "Ben", age: 46 }
];

export const handlers = [
  http.get('/api/persons', () => {
    console.log("handler called")
    return HttpResponse.json(subscribers)
  }),
]