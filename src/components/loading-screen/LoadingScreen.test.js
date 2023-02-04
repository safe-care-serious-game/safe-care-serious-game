import { render } from "@testing-library/react";
import LoadingScreen from "./LoadingScreen";

test("renders splash screen", () => {
  const { container } = render(<LoadingScreen />);
  expect(
    container.firstChild.firstChild.firstChild.firstChild.tagName.toLowerCase()
  ).toEqual("h1");
  expect(
    container.firstChild.firstChild.firstChild.firstChild
  ).toHaveTextContent("Safe Care");
  expect(
    container.firstChild.firstChild.firstChild.lastChild.tagName.toLowerCase()
  ).toEqual("h2");
  expect(
    container.firstChild.firstChild.firstChild.lastChild
  ).toHaveTextContent("SERIOUS GAME");
  expect(container.firstChild.lastChild).toHaveTextContent("Carregando...");
});
