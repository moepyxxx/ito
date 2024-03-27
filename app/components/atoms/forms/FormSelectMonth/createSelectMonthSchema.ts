import { z } from "zod";

export const createSelectMonthSchema = (options: {
  required: boolean;
  requiredMessage?: string;
}) => {
  let schema = z.coerce
    .date({
      invalid_type_error: options.requiredMessage
        ? options.requiredMessage
        : undefined,
    })
    .nullable();

  if (options.required) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore nullableのエラー出るが無視
    schema = schema.refine((date) => date !== null, {
      message: options.requiredMessage,
    });
  }

  return schema;
};
