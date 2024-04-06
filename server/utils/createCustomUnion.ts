import { getConstantsExceptionError } from './getRequestErrorMessage';
import { z } from 'zod';

export const createCustomUnion = <T extends number>(
  object: Record<string, T>,
  label: string,
) => {
  return z.custom<T>(
    (data) =>
      typeof data === 'number' && Object.values(object).includes(data as T),
    getConstantsExceptionError(label),
  );
};
