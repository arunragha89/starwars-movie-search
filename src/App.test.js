import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import mockData from "./mocks/data";

beforeAll(() => jest.spyOn(window, "fetch"));

test("all movies are shown to the user", async () => {
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockData,
  });

  const { findAllByTestId, getByText } = render(<App />);

  await waitFor(() => {
    getByText("Richard Marquand");
  });

  const rows = await findAllByTestId("movie-list-item");
  expect(rows.length).toBe(mockData.count);
});
