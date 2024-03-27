import { forwardRef, useId } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../FormCheckBox";
import { Selection } from "../FormRadioGroup";

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
      <div className="my-4 relative">
        <label htmlFor={uniqueId} className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（選択必須です）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </label>
        <select
          ref={ref}
          id={uniqueId}
          className="block mt-1 p-1 border border-solid border-deep-gray rounded w-96 px-3 py-2"
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
            className="mt-2 absolute bottom-[-28px] left-0"
            id={`${uniqueId}-error`}>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);
