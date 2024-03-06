import { forwardRef, useId } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../FormCheckBox";
import { tv } from "tailwind-variants";

const textAreaStyle = tv({
  base: "mt-1 p-1 border border-solid border-deep-gray rounded max-w-96",
  variants: {
    disabled: {
      true: "text-deep-gray",
    },
  },
});

type Props = InputProps & {
  rows?: number;
};

// eslint-disable-next-line react/display-name
export const FormTextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, required, disabled, errorMessage, rows = 5, ...restArgs }, ref) => {
    const uniqueId = useId();
    return (
      <div className="my-4 relative">
        <label htmlFor={uniqueId} className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（入力必須です）</Typography>}
          {disabled && <Typography size="small">（入力できません）</Typography>}
        </label>
        <textarea
          {...restArgs}
          ref={ref}
          id={uniqueId}
          aria-invalid={errorMessage ? true : false}
          aria-describedby={`${uniqueId}-error`}
          className={`${textAreaStyle({ disabled })}`}
          disabled={disabled}
          rows={rows}
        />
        {errorMessage && (
          <Typography
            color="error"
            size="small"
            id={`${uniqueId}-error`}
            className="mt-2 absolute bottom-[-28px] left-0">
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);
