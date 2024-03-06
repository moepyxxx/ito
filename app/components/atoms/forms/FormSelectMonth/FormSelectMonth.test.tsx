import { describe, test } from "vitest";
import { composeStory } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import Meta, {
  Base as BaseStory,
  Required as RequiredStory,
} from "./FormSelectMonth.stories";
import userEvent from "@testing-library/user-event";

const Base = composeStory(BaseStory, Meta);
const Required = composeStory(RequiredStory, Meta);
const user = userEvent.setup();

describe("FormSelectMonth", () => {
  test("ラベルが存在すること", async () => {
    render(<Base />);
    expect(screen.getByText(/誕生日/)).toBeInTheDocument();
  });

  test("チェックできること", async () => {
    render(<Base />);
    const group = screen.getByRole("group", {
      name: "誕生日",
    });
    expect(group).toBeInTheDocument();

    const selectYear = screen.getByRole("combobox", {
      name: "誕生日（年）",
    });
    await user.selectOptions(selectYear, "2000");
    expect(selectYear).toHaveValue("2000");

    const selectMonth = screen.getByRole("combobox", {
      name: "誕生日（月）",
    });
    await user.selectOptions(selectMonth, "12");
    expect(selectMonth).toHaveValue("12");
  });

  test("必須の時入力がない場合はエラーメッセージが表示されること", async () => {
    render(<Required />);
    const select = screen.getByRole("group", {
      name: "誕生日 （選択必須です）",
    });
    expect(select).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "データ確認" }));
    expect(screen.getByText(/選択必須です/)).toBeInTheDocument();
  });
});
