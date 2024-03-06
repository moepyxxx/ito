import { forwardRef, useId } from "react";
import { Typography } from "../../Typography";
import { Selection } from "../FormRadioGroup";
import { ChangeHandler } from "react-hook-form";

export type InputProps = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
};

type Props = InputProps & {
  selections: Selection[];
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
        className="my-4 relative"
        aria-invalid={errorMessage ? true : false}
        area-describedby={`${uniqueId}-error`}>
        <legend className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（1つ以上選択）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </legend>
        <div className="mt-1">
          {selections.map((selection) => (
            <div key={selection.value}>
              <input
                {...restArgs}
                ref={ref}
                type="checkbox"
                value={selection.value.toString()}
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
            className="mt-2 absolute bottom-[-28px] left-0"
            id={`${uniqueId}-error`}>
            {errorMessage}
          </Typography>
        )}
      </fieldset>
    );
  }
);
