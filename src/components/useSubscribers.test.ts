import { renderHook, waitFor } from "@testing-library/react";
import useSubscribers from "./useSubscribers";
import { setupServer } from 'msw/node'
import { handlers } from "../../tests/msw/handlers";
import { Subscriber } from "@/lib/models/Subscriber";

export const server = setupServer(...handlers)

describe('useSubscribers', () => {
    beforeAll(() => {
        server.listen()
    });

    afterAll(() => {
        server.close()
    });
    
    it('should load subscribers data', async () => {
        const { result } = renderHook(() => useSubscribers());
        await waitFor(() => result.current.data !== undefined);
        expect(result.current.data).toBeDefined();
    });

    it('should add new subscriber', async () => {
        const { result } = renderHook(() => useSubscribers());
        await waitFor(() => result.current.data !== undefined);
        const subscriber: Subscriber = { name: "Subscriber1", age: 10}
        const saved = result.current.addSubscriber(subscriber);
        expect(saved.ok).toBeTruthy();
        expect(saved.val).toEqual("New subscriber has been added successfully!");
    });
});