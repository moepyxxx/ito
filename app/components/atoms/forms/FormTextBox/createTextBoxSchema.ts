import { z } from "zod";

export const createTextBoxSchema = (options: {
  required: boolean;
  requiredMessage?: string;
  max?: number;
  requiredMaxMessage?: string;
}) => {
  let schema = z.string();

  if (options.required) {
    schema = schema.min(1, options.requiredMessage);
  }

  if (options.max) {
    schema = schema.max(options.max, options.requiredMaxMessage);
  }

  return schema;
};

export const createTextBoxNumberSchema = (options: {
  required: boolean;
  requiredMessage?: string;
  max?: number;
  requiredMaxMessage?: string;
}) => {
  let schema = z.preprocess(
    (v) => (typeof v === "number" ? v.toString() : v),
    z
      .string()
      .transform((value) => (value === null ? null : parseInt(value, 10)))
      .nullable()
  );

  if (options.required) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.refine((value) => value !== null, options.requiredMessage);
  }

  if (options.max) {
    const max = options.max;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.refine((value) => {
      return value != null && !isNaN(value) ? value <= max : true;
    }, options.requiredMaxMessage);
  }

  return schema;
};
