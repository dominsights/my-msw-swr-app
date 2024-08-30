import { Person } from '@/app/components/Person';
import { http, HttpResponse } from 'msw'
 
const people: Person[] = [
    { name: "John", age: 30 },
    { name: "Mary", age: 35 },
    { name: "Ben", age: 46 }
];

export const handlers = [
  http.get('/api/persons', () => {
    console.log("handler called")
    return HttpResponse.json(people)
  }),
]