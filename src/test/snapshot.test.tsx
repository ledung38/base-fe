import { render } from "@testing-library/react";

function Title() {
  return <h1>Hello</h1>;
}

test("snapshot test using RTL", () => {
  const { container } = render(<Title />);
  expect(container).toMatchSnapshot();
});
