import {
  getConstantsExceptionError,
  getRequiredError,
} from './getRequestErrorMessage';
import { z } from 'zod';

export const createCustomUnion = <T extends number | null>(
  object: Record<string, T>,
  label: string,
  required?: boolean,
) => {
  return z.custom<T>((data) => {
    if (data === null && required) return getRequiredError(label);
    if (data === null) {
      return true;
    }
    return (
      typeof data === 'number' && Object.values(object).includes(data as T)
    );
  }, getConstantsExceptionError(label));
};
