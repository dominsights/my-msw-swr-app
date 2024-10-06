import { http, HttpResponse } from 'msw'
import { addSubscriber, getSubscribers } from '@/lib/services/subscribers';
import { Subscriber } from '@/lib/models/subscriber';

export const handlers = [
  http.get('/api/subscribers', async () => {
    return HttpResponse.json(await getSubscribers())
  }),

  http.post('/api/subscribers', async ({request}) => {
    const subscriber = await request.json() as Subscriber;
    await addSubscriber(subscriber);
    return HttpResponse.json("ok", {status: 201})
  }),
]