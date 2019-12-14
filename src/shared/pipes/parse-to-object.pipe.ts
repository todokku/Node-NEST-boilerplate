import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  ForbiddenException,
} from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Injectable()
export class ParseToObjectPipe implements PipeTransform {
  constructor(private readonly propertyName: string) {}

  transform(body: any, metadata: ArgumentMetadata) {
    body[this.propertyName] = JSON.parse(body[this.propertyName]);
    return body;
  }
}
