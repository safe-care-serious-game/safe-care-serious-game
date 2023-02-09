import { render } from "@testing-library/react";
import GameMode from "./GameMode";

test("renders game mode", () => {
  const { container } = render(<GameMode />);
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
  expect(container.firstChild.childNodes[1].firstChild).toHaveTextContent(
    "Single Player"
  );
  expect(container.firstChild.childNodes[1].lastChild).toHaveTextContent(
    "Multi Player"
  );
  expect(container.firstChild.lastChild.firstChild).toHaveTextContent("Voltar");
});
