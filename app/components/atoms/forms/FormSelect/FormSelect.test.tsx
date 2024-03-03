import { describe, test } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  Base as BaseStory,
  Required as RequiredStory,
  // Disabled as DisabledStory,
} from "./FormSelect.stories";
import userEvent from "@testing-library/user-event";

const Base = composeStory(BaseStory, Meta);
const Required = composeStory(RequiredStory, Meta);
// const Disabled = composeStory(DisabledStory, Meta);
const user = userEvent.setup();

describe("FormSelect", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/種類/)).toBeInTheDocument();
  });
  test("チェックできること", async () => {
    render(<Base />);
    const select = screen.getByRole("combobox", {
      name: "種類",
    });
    // const option = screen.getByRole("option", { name: "セキセイインコ" });
    await user.selectOptions(select, "セキセイインコ");
    expect(select).toHaveValue("1");
  });
  test("必須の時入力がない場合はエラーメッセージが表示されること", async () => {
    render(<Required />);
    const select = screen.getByRole("combobox", {
      name: "種類 （選択必須です）",
    });
    expect(select).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "データ確認" }));
    expect(screen.getByText(/選択必須です/)).toBeInTheDocument();
  });
  // test("disabledの時入力できないこと", async () => {
  //   render(<Disabled />);
  //   const radioGroup = screen.getByRole("radiogroup", {
  //     name: "種類 （選択できません）",
  //   });
  //   expect(radioGroup).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("radio", { name: "より良くなった" })
  //   ).toBeDisabled();
  //   expect(screen.getByRole("radio", { name: "より良くなった" })).toBeChecked();
  // });
});
