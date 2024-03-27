import { z } from "zod";

export const createTextAreaSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z.string();

  if (options.required) {
    schema = schema.min(1, options.requiredMessage);
  }

  return schema;
};
