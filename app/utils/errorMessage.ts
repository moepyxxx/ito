type ErrorMessageInput =
  | {
      type: "min";
      value: number;
    }
  | {
      type: "max";
      value: number;
    }
  | {
      type: "maxNumber";
      value: number;
    }
  | {
      type: "required";
    }
  | {
      type: "number";
    }
  | {
      type: "email";
    }
  | {
      type: "regex";
      enableRegex: string;
    };

export const getErrorMessage = (input: ErrorMessageInput) => {
  switch (input.type) {
    case "min":
      return "最小" + input.value + "文字以上で入力してください";
    case "max":
      return "最大" + input.value + "文字以下で入力してください";
    case "maxNumber":
      return "最大" + input.value + "以下で入力してください";
    case "required":
      return "必須項目です";
    case "number":
      return "数値で入力してください";
    case "email":
      return "メールアドレスの形式で入力してください";
    case "regex":
      return "指定された形式で入力してください: " + input.enableRegex;
  }
};
