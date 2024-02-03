import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Meta, { Base as BaseStory } from "./FormTextArea.stories";

const Base = composeStory(BaseStory, Meta);

const user = userEvent.setup();

describe("FormTextArea", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/気になることのメモ/)).toBeInTheDocument();
  });
});
