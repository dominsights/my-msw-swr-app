import { Subscriber } from '@/lib/models/Subscriber';
import { http, HttpResponse } from 'msw'
 
const subscribers: Subscriber[] = [
    { fullName: "John", email: "john@email.com", status: true },
    { fullName: "Mary", email: "mary@email.com", status: true },
    { fullName: "Ben", email: "ben@email.com", status: false },
];

export const handlers = [
  http.get('/api/subscribers', () => {
    return HttpResponse.json(subscribers)
  }),
  http.post('/api/subscribers', () => {
    return HttpResponse.json("ok", {status: 201})
  }),
]