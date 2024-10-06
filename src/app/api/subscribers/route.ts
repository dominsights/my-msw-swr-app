import type { NextApiRequest, NextApiResponse } from 'next'
import { Subscriber } from '../../../lib/models/Subscriber';

const subscribers: Subscriber[] = [
    { name: "John", age: 30 },
    { name: "Mary", age: 35 },
    { name: "Ben", age: 46 }
];

export async function GET(request: Request, response: NextApiResponse) {
    return Response.json(subscribers)
}

export async function POST(request: Request, response: NextApiResponse) {
    return Response.json("ok");
}