import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { Base as BaseStory } from "./TextLink.stories";

const Base = composeStory(BaseStory, Meta);

describe("TextLink", () => {
  test("クリックでリンク先へ遷移すること", () => {
    render(<Base />);
    expect(screen.getByText(/保存して記録を終わる/)).toBeInTheDocument();
    expect(screen.getByText(/保存して記録を終わる/)).toHaveAttribute(
      "href",
      "https://www.google.com"
    );
  });
});
