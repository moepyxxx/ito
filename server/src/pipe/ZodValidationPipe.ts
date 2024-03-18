import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { INTERNAL_SERVER_ERROR_MESSAGE } from 'constants/errorMessage';
import { createTorisanSchema } from 'src/torisans/models/torisan.schema';
import { ZodError } from 'zod';

export class ZodValidationPipe<BeforeTransform, AfterTransform>
  implements PipeTransform<BeforeTransform, AfterTransform>
{
  transform(value: BeforeTransform, _: ArgumentMetadata) {
    try {
      const parsedValue = createTorisanSchema.parse(value);
      return parsedValue as AfterTransform;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const message = error.errors.map((err) => err.message).join(',');
        throw new BadRequestException(message);
      }
      throw new InternalServerErrorException(INTERNAL_SERVER_ERROR_MESSAGE);
    }
  }
}
