import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import { Standard, Loading, Empty } from "./ScrollBox.stories.mdx";

it("renders a card", () => {
  const { container } = render(<Standard />);

  expect(container.querySelector(".card-title").not.toBe(null));
});
