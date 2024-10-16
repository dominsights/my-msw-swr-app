import { renderHook, waitFor } from "@testing-library/react";
import useSubscribers from "./useSubscribers";
import { setupServer } from "msw/node";
import { handlers } from "../../tests/msw/handlers";
import { Subscriber } from "@/lib/models/subscriber";
import { act } from "react";

export const server = setupServer(...handlers);

describe("useSubscribers", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should load subscribers data", async () => {
    const { result } = renderHook(() => useSubscribers());
    await waitFor(() => result.current.data !== undefined);
    expect(result.current.data).toBeDefined();
  });

  it("should add new subscriber", async () => {
    const { result } = renderHook(() => useSubscribers());
    await waitFor(() => result.current.data !== undefined);
    const subscriber: Subscriber = {
      fullName: "Subscriber1",
      email: "subscriber1@email.com",
      status: true,
    };

    const saved = await act(async () => {
      return await result.current.addSubscriber(subscriber);
    });

    expect(saved.ok).toBeTruthy();
    expect(saved.val).toEqual("New subscriber has been added successfully!");

    expect(result.current.data).toEqual(
      expect.arrayContaining([expect.objectContaining(subscriber)]),
    );
  });
});
