import { Ref, RefCallback, SyntheticEvent, forwardRef, useId } from "react";
import { Typography } from "../../Typography";

export type InputProps = {
  onChange: (e: SyntheticEvent) => void;
  onBlur: (e: SyntheticEvent) => void;
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
};

type Props = InputProps & {
  selections: { value: number; label: string }[];
};

// eslint-disable-next-line react/display-name
export const FormCheckBox = forwardRef<HTMLInputElement, Props>(
  ({ label, selections, required, disabled, ...restArgs }, ref) => {
    console.log(restArgs.onChange);
    const uniqueId = useId();
    return (
      <fieldset>
        <legend>
          <Typography>{label}</Typography>
        </legend>
        {selections.map((selection) => (
          <div key={selection.value}>
            <input
              {...restArgs}
              ref={ref}
              type="checkbox"
              value={selection.value}
              id={`${uniqueId}-${selection.value}`}
            />
            <label htmlFor={`${uniqueId}-${selection.value}`} className="ml-2">
              {selection.label}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
);
