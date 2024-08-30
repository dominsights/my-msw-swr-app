import type { NextApiRequest, NextApiResponse } from 'next'
import { Person } from '../../components/Person';

const people: Person[] = [
    { name: "John", age: 30 },
    { name: "Mary", age: 35 },
    { name: "Ben", age: 46 }
];

export async function GET(request: Request, response: NextApiResponse) {
    console.log('get called')

    return Response.json(people)
}