import { z } from "zod";

export const createTextBoxSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z.string();

  if (options.required) {
    schema = schema.min(1, options.requiredMessage);
  }

  return schema;
};

export const createTextBoxNumberSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z
    .string()
    .transform((value) => parseInt(value, 10))
    .nullable();

  if (options.required) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.refine((value) => value !== null, options.requiredMessage);
  }

  return schema;
};
