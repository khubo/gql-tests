import { render, screen } from "@testing-library/react";
import ListAnimals from "./ListAnimals";
import AutoMockProvider from "../MockProvider";

it("testing List Animal component", async () => {
  // inject mock data
  const mockResolvers = {
    Animals: () => [
      {
        id: "12345",
        name: "black",
        primary_color: "black",
        primary_color_group: "black",
      },
    ],
  };

  render(
    <AutoMockProvider mockResolvers={mockResolvers}>
      <ListAnimals />
    </AutoMockProvider>
  );

  // random tests to prove a point
  expect(screen.getAllByText("Loading...")).toBeTruthy();
  await screen.findAllByText(/animals/i);
  expect(screen.getAllByTestId("animal")).toBeTruthy();
});
