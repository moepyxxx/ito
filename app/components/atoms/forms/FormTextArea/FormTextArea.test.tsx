import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, { Base as BaseStory } from "./FormTextArea.stories";

const Base = composeStory(BaseStory, Meta);

describe("FormTextArea", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/気になることのメモ/)).toBeInTheDocument();
  });
});
