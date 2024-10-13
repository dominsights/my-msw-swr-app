import { render, waitFor } from "@testing-library/react";
import Subscribers from "./Subscribers";
import { handlers } from "../../tests/msw/handlers";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

export const server = setupServer(...handlers);

describe("Subscribers", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should add new subscriber", async () => {
    const renderResult = render(<Subscribers />);

    // Wait for page to load
    await waitFor(() =>
      expect(renderResult.getByText("New subscriber")).toBeDefined(),
    );
    userEvent.click(renderResult.getByText("New subscriber"));

    // Wait for dialog to open
    await waitFor(() =>
      expect(renderResult.getByText("Add new subscriber")).toBeDefined(),
    );

    // Type full name
    await userEvent.type(
      renderResult.getByRole("textbox", { name: /full name/i }),
      "Domício Medeiros",
    );

    // Type email
    await userEvent.type(
      renderResult.getByRole("textbox", { name: /email/i }),
      "domicio@email.com",
    );

    userEvent.click(renderResult.getByText(/save/i));

    await waitFor(() =>
      expect(renderResult.queryByText("Add new subscriber")).toBeNull(),
    );

    const newRow = renderResult.getByRole('row', {  name: /domício medeiros domicio@email\.com active/i})
    expect(newRow).toBeInTheDocument();
  });
});
