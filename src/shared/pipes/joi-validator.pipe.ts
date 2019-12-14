import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  ForbiddenException,
  HttpStatus,
} from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class JoiValidatorPipe implements PipeTransform {
  constructor(
    private readonly propertyName: string,
    private readonly joiSchema: Joi.ObjectSchema,
  ) {}

  transform(body: any, metadata: ArgumentMetadata) {
    const { error, value } = this.joiSchema.validate(body[this.propertyName]);
    if (error) {
      throw new ForbiddenException({
        message: error.details[0].message,
        key: error.details[0].context.key,
        value: error.details[0].context.value,
        status: HttpStatus.FORBIDDEN,
      });
    } else {
      body[this.propertyName] = value;
      return body;
    }
  }
}
