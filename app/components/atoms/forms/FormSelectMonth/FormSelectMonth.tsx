import { forwardRef, useEffect, useId, useMemo, useState } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../FormCheckBox";

type Props = Omit<InputProps, "onChange"> & {
  onChange: (e: Date | null) => void;
  initialValue: Date | null;
};

// eslint-disable-next-line react/display-name
export const FormSelectMonth = forwardRef<HTMLSelectElement, Props>(
  (
    {
      label,
      required,
      disabled,
      errorMessage,
      onChange,
      initialValue,
      ...restArgs
    },
    _
  ) => {
    const months = useMemo(() => {
      return Array.from({ length: 12 }, (_, index) => index + 1);
    }, []);
    const years = useMemo(() => {
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - 30;
      const endYear = currentYear;
      return Array.from(
        { length: endYear - startYear + 1 },
        (_, index) => startYear + index
      );
    }, []);

    const [year, setYear] = useState<number | null>(
      initialValue ? initialValue.getFullYear() : null
    );
    const [month, setMonth] = useState<number | null>(
      initialValue ? initialValue.getMonth() + 1 : null
    );

    useEffect(() => {
      if (year && month) {
        const date = new Date(Number(year), Number(month), 1);
        onChange(date);
      } else {
        onChange(null);
      }
    }, [year, month, onChange]);

    const uniqueId = useId();
    const errorId = errorMessage ? `${uniqueId}-error` : undefined;

    return (
      <fieldset aria-describedby={errorId} className="my-4 relative">
        <legend className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（選択必須です）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </legend>
        <div className="flex items-center">
          <select
            aria-required={required}
            aria-label={`${label}（年）`}
            className="mt-2 block mt-2 p-1 border border-solid border-deep-gray rounded w-32 px-3 py-2"
            disabled={disabled}
            name={`${restArgs.name}-year`}
            value={year?.toString() || ""}
            onChange={(e) => setYear(Number(e.target.value))}>
            <option value="">選択</option>
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
          <span className="mx-2">年</span>
          <select
            aria-required={required}
            aria-label={`${label}（月）`}
            className="mt-2 block mt-2 p-1 border border-solid border-deep-gray rounded w-24 px-3 py-2"
            disabled={disabled}
            name={`${restArgs.name}-month`}
            value={month?.toString() || ""}
            onChange={(e) => setMonth(Number(e.target.value))}>
            <option value="">選択</option>
            {months.map((month) => (
              <option key={month} value={month.toString()}>
                {month}
              </option>
            ))}
          </select>
          <span className="mx-2">月</span>
        </div>
        {errorMessage && (
          <Typography
            color="error"
            size="small"
            className="mt-2 absolute bottom-[-28px] left-0"
            aria-live="assertive"
            id={errorId}>
            {errorMessage}
          </Typography>
        )}
      </fieldset>
    );
  }
);
