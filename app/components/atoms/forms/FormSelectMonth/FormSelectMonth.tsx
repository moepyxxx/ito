import { forwardRef, useEffect, useId, useMemo, useState } from "react";
import { Typography } from "../../Typography";
import { InputProps } from "../FormCheckBox";

type Props = Omit<InputProps, "onChange"> & {
  onChange: (e: Date | null) => void;
};

// eslint-disable-next-line react/display-name
export const FormSelectMonth = forwardRef<HTMLSelectElement, Props>(
  ({ label, required, disabled, errorMessage, onChange, ...restArgs }, _) => {
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

    const [year, setYear] = useState<number | null>(null);
    const [month, setMonth] = useState<number | null>(null);

    useEffect(() => {
      if (year && month) {
        const date = new Date(Number(year), Number(month), 1);
        onChange(date);
      } else {
        onChange(null);
      }
    }, [year, month, onChange]);

    const uniqueId = useId();

    return (
      <fieldset aria-describedby={`${uniqueId}-error`}>
        <legend className="flex items-center">
          <Typography>{label}</Typography>
          {required && <Typography size="small">（選択必須です）</Typography>}
          {disabled && <Typography size="small">（選択できません）</Typography>}
        </legend>
        <div className="flex items-center">
          <select
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
            className="mt-2"
            id={`${uniqueId}-error`}>
            {errorMessage}
          </Typography>
        )}
      </fieldset>
    );
  }
);
