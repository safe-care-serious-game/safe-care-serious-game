import { render } from "@testing-library/react";
import MainMenu from "./MainMenu";

const requestFullscreen = document.body.requestFullscreen;
const play = HTMLMediaElement.prototype.play;

beforeAll(() => {
  // Mock `requestFullscreen` to always resolve
  document.body.requestFullscreen = () => new Promise((resolve) => resolve());
  // Mock `HTMLMediaElement.play`
  HTMLMediaElement.prototype.play = jest.fn();
});

afterAll(() => {
  document.body.requestFullscreen = requestFullscreen;
  HTMLMediaElement.prototype.play = play;
});

test("renders main menu", () => {
  const { container } = render(<MainMenu />);
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
  expect(container.firstChild.lastChild.firstChild).toHaveTextContent("Jogar");
  expect(container.firstChild.lastChild.lastChild).toHaveTextContent(
    "Saiba Mais"
  );
});
