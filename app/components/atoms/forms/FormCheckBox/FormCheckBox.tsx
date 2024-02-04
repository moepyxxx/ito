import { SyntheticEvent, forwardRef, useId } from "react";
import { Typography } from "../../Typography";

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
};

// eslint-disable-next-line react/display-name
export const FormCheckBox = forwardRef<HTMLInputElement, Props>(
  (
    { label, selections, required, disabled, errorMessage, ...restArgs },
    ref
  ) => {
    const uniqueId = useId();
    return (
      <fieldset
        className="my-4"
        aria-invalid={errorMessage ? true : false}
        area-describedby={`${uniqueId}-error`}>
        <legend className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（1つ以上選択）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </legend>
        <div className="mt-2">
          {selections.map((selection) => (
            <div key={selection.value}>
              <input
                {...restArgs}
                ref={ref}
                type="checkbox"
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
      </fieldset>
    );
  }
);
