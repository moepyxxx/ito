import { z } from "zod";

export const createCheckboxSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z.array(
    z.preprocess(
      (v) => (typeof v === "number" ? v.toString() : v),
      z.string().transform((value) => parseInt(value, 10))
    )
  );
  if (options.required) {
    schema = schema.min(1, { message: options.requiredMessage });
  }
  return schema;
};
