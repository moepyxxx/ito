import { forwardRef, useId } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../FormCheckBox";

export type Selection = { value: number; label: string; disabled?: boolean };

type Props = InputProps & {
  selections: Selection[];
};

// eslint-disable-next-line react/display-name
export const FormSelect = forwardRef<HTMLSelectElement, Props>(
  (
    { label, selections, required, disabled, errorMessage, ...restArgs },
    ref
  ) => {
    const uniqueId = useId();
    return (
      <>
        <label htmlFor={uniqueId} className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（選択必須です）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </label>
        <select
          ref={ref}
          id={uniqueId}
          className="mt-2 block mt-2 p-1 border border-solid border-deep-gray rounded w-96 px-3 py-2"
          disabled={disabled}
          {...restArgs}>
          <option value="">選択してください</option>
          {selections.map((selection) => (
            <option key={selection.value} value={selection.value.toString()}>
              {selection.label}
            </option>
          ))}
        </select>
        {errorMessage && (
          <Typography
            color="error"
            size="small"
            className="mt-2"
            id={`${uniqueId}-error`}>
            {errorMessage}
          </Typography>
        )}
      </>
    );
  }
);
