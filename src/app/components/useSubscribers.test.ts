import { renderHook, waitFor } from "@testing-library/react";
import usePersons from "./useSubscribers";
import { setupServer } from 'msw/node'
import { handlers } from "../../../tests/msw/handlers";

export const server = setupServer(...handlers)

describe('usePersons', () => {
    beforeAll(() => {
        server.listen()
    });

    afterAll(() => {
        server.close()
    });
    
    it('should load persons data', async () => {
        const { result } = renderHook(() => usePersons());
        await waitFor(() => result.current.data !== undefined);
        expect(result.current.data).toBeDefined();
    });
});