import type { NextApiRequest, NextApiResponse } from 'next'
import { Subscriber } from '../../../lib/models/subscriber';
import { addSubscriber, getSubscribers } from '@/lib/services/subscribers';



export async function GET(request: Request, response: NextApiResponse) {
    return Response.json(await getSubscribers())
}

export async function POST(request: Request, response: NextApiResponse) {
    const subscriber: Subscriber = await request.json();
    await addSubscriber(subscriber)
    return Response.json("ok", {status: 201});
}