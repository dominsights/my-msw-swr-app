import { Subscriber } from '@/lib/models/Subscriber';
import { http, HttpResponse } from 'msw'
 
const subscribers: Subscriber[] = [
    { name: "John", age: 30 },
    { name: "Mary", age: 35 },
    { name: "Ben", age: 46 }
];

export const handlers = [
  http.get('/api/subscribers', () => {
    return HttpResponse.json(subscribers)
  }),
  http.post('/api/subscribers', () => {
    return HttpResponse.json("ok", {status: 201})
  }),
]