import type { NextApiRequest, NextApiResponse } from 'next'
import { Subscriber } from '../../../lib/models/Subscriber';

const subscribers: Subscriber[] = [
    { fullName: "John", email: "john@email.com", status: true },
    { fullName: "Mary", email: "mary@email.com", status: true },
    { fullName: "Ben", email: "ben@email.com", status: false },
];

export async function GET(request: Request, response: NextApiResponse) {
    return Response.json(subscribers)
}

export async function POST(request: Request, response: NextApiResponse) {
    return Response.json("ok");
}