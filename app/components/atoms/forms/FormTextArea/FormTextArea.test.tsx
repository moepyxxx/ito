import { describe, test } from "vitest";
import { composeStory } from "@storybook/react";
import { act, render, screen } from "@testing-library/react";
import Meta, {
  Base as BaseStory,
  Required as RequiredStory,
  Disabled as DisabledStory,
} from "./FormTextArea.stories";
import userEvent from "@testing-library/user-event";

const Base = composeStory(BaseStory, Meta);
const Required = composeStory(RequiredStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const user = userEvent.setup();

describe("FormTextArea", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/気になることのメモ/)).toBeInTheDocument();
  });

  test("入力できること", async () => {
    render(<Base />);
    const textbox = screen.getByRole("textbox", { name: "気になることのメモ" });
    await user.type(textbox, "テスト");
    expect(textbox).toHaveValue("テスト");
  });

  test("必須の時入力がない場合はエラーメッセージが表示されること", async () => {
    render(<Required />);
    const textbox = screen.getByRole("textbox", {
      name: "気になることのメモ （入力必須です）",
    });
    expect(textbox).toBeInTheDocument();
    act(() => {
      textbox.focus();
    });
    await user.click(screen.getByRole("button", { name: "データ確認" }));
    expect(screen.getByText(/必須項目です/)).toBeInTheDocument();
  });

  test("disabledの時入力できないこと", async () => {
    render(<Disabled />);
    const textbox = screen.getByRole("textbox", {
      name: "気になることのメモ （入力できません）",
    });
    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeDisabled();
  });
});
