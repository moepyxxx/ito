import { describe, test } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  Base as BaseStory,
  Required as RequiredStory,
  Disabled as DisabledStory,
} from "./FormCheckBox.stories";
import userEvent from "@testing-library/user-event";

const Base = composeStory(BaseStory, Meta);
const Required = composeStory(RequiredStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const user = userEvent.setup();

describe("FormCheckBox", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/お気に入りのおやつ/)).toBeInTheDocument();
  });
  test("チェクできること", async () => {
    render(<Base />);
    const checkbox = screen.getByRole("checkbox", { name: "塩土" });
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test("必須の時入力がない場合はエラーメッセージが表示されること", async () => {
    render(<Required />);
    const checkGroup = screen.getByRole("group", {
      name: "お気に入りのおやつ （1つ以上選択）",
    });
    expect(checkGroup).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "データ確認" }));
    expect(screen.getByText(/1つ以上選択してください/)).toBeInTheDocument();
  });
  test("disabledの時入力できないこと", async () => {
    render(<Disabled />);
    const checkGroup = screen.getByRole("group", {
      name: "お気に入りのおやつ （選択できません）",
    });
    expect(checkGroup).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "塩土" })).toBeDisabled();
    expect(screen.getByRole("checkbox", { name: "塩土" })).toBeChecked();
  });
});
