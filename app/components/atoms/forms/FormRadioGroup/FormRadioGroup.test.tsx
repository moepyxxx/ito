import { describe, test } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  Base as BaseStory,
  Required as RequiredStory,
  Disabled as DisabledStory,
} from "./FormRadioGroup.stories";
import userEvent from "@testing-library/user-event";

const Base = composeStory(BaseStory, Meta);
const Required = composeStory(RequiredStory, Meta);
const Disabled = composeStory(DisabledStory, Meta);
const user = userEvent.setup();

describe("FormRadioGroup", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/体調の変化/)).toBeInTheDocument();
  });
  test("チェクできること", async () => {
    render(<Base />);
    const radio = screen.getByRole("radio", { name: "より良くなった" });
    await user.click(radio);
    expect(radio).toBeChecked();
  });
  test("必須の時入力がない場合はエラーメッセージが表示されること", async () => {
    render(<Required />);
    const radioGroup = screen.getByRole("radiogroup", {
      name: "体調の変化 （どれか1つを選択）",
    });
    expect(radioGroup).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "データ確認" }));
    expect(screen.getByText(/選択必須です/)).toBeInTheDocument();
  });
  test("disabledの時入力できないこと", async () => {
    render(<Disabled />);
    const radioGroup = screen.getByRole("radiogroup", {
      name: "体調の変化 （選択できません）",
    });
    expect(radioGroup).toBeInTheDocument();
    expect(
      screen.getByRole("radio", { name: "より良くなった" })
    ).toBeDisabled();
    expect(screen.getByRole("radio", { name: "より良くなった" })).toBeChecked();
  });
});
