import { z } from "zod";

export const createRadioGroupSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z.preprocess(
    (v) => (typeof v === "number" ? v.toString() : v),
    z
      .string({
        invalid_type_error: options.requiredMessage
          ? options.requiredMessage
          : undefined,
      })
      .transform((value) => parseInt(value, 10))
  );

  if (options.required) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.refine((data) => data !== null, {
      message: options.requiredMessage,
    });
  }

  if (!options.required) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.nullable();
  }

  return schema;
};
