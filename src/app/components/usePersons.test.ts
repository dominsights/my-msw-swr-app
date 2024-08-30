import { renderHook, waitFor } from "@testing-library/react";
import usePersons from "./usePersons";

describe('usePersons', () => {
    it('should load persons data', async () => {
        const { result } = renderHook(() => usePersons());
        await waitFor(() => result.current.data !== undefined);
        expect(result.current.data).toBeDefined();
    });
});