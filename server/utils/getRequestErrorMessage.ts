export const getRequiredError = (label: string) => `${label}は必須です`;

export const getMaxCharsError = (label: string, max: number) =>
  `${label}は最大${max.toString()}文字です`;

export const getMaxIntError = (label: string, max: number) =>
  `${label}は${max.toString()}以下にしてください`;

export const getConstantsExceptionError = (label: string) =>
  `${label}には適切な値が入力してください`;

export const getMaxDateIsTodayError = (label: string) =>
  `${label}は本日以前の日付にしてください`;
