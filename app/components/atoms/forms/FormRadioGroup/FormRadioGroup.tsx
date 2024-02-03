import { Ref, RefCallback, SyntheticEvent, forwardRef, useId } from "react";
import { Typography } from "../../Typography";
import { Button } from "../../Button";

export type InputProps = {
  onChange: (e: SyntheticEvent) => void;
  onBlur: (e: SyntheticEvent) => void;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
};

type Props = InputProps & {
  selections: { value: string; label: string; disabled?: boolean }[];
  reset?: () => void;
};

// eslint-disable-next-line react/display-name
export const FormRadioGroup = forwardRef<HTMLInputElement, Props>(
  (
    { label, selections, required, disabled, errorMessage, reset, ...restArgs },
    ref
  ) => {
    const uniqueId = useId();
    return (
      <fieldset
        role="radiogroup"
        className="my-4"
        aria-invalid={errorMessage ? true : false}
        area-describedby={`${uniqueId}-error`}>
        <legend className="flex items-center">
          <Typography>{label}</Typography>
          {required && (
            <Typography size="small">（どれか1つを選択）</Typography>
          )}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </legend>
        <div className="mt-2">
          {selections.map((selection) => (
            <div key={selection.value}>
              <input
                {...restArgs}
                ref={ref}
                type="radio"
                value={selection.value}
                id={`${uniqueId}-${selection.value}`}
                disabled={disabled || selection.disabled}
              />
              <label
                htmlFor={`${uniqueId}-${selection.value}`}
                className="ml-2">
                {selection.label}
              </label>
            </div>
          ))}
        </div>
        {errorMessage && (
          <Typography
            color="error"
            size="small"
            className="mt-2"
            id={`${uniqueId}-error`}>
            {errorMessage}
          </Typography>
        )}
        {!required && !disabled && reset && (
          <Button
            className="mt-2"
            element={{
              elementType: "button",
              onClick: reset,
            }}>
            選択解除
          </Button>
        )}
      </fieldset>
    );
  }
);
