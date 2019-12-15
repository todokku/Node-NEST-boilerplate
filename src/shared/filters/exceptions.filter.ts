import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any /* unknown */, host: ArgumentsHost) {
    // console.log({
    //   exceptionConstructorName: exception.constructor.name,
    //   isHttpError: exception instanceof HttpException,
    //   exception,
    // });

    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    let json = {
      // timestamp: new Date().toISOString(),
      path: req.url,
      error: undefined,
      statusCode: exception.status,
      message: null,
      key: undefined,
      value: undefined,
    };
    if (exception instanceof HttpException) {
      json.statusCode = exception.getStatus();
      json = exception.message;

      // Class validator handler
      if (exception instanceof BadRequestException) {
        if (
          exception.message &&
          Array.isArray(exception.message.message) &&
          exception.message.message[0] instanceof ValidationError
        ) {
          json.key = exception.message.message[0].property;
          json.value = exception.message.message[0].value;
          json.message = Object.values(
            exception.message.message[0].constraints,
          )[0];
        }
      }
    } else if (exception instanceof TypeError) {
      json.error = 'Not Found';
      json.statusCode = 404;
      // json.message= exception.message;
    } else if (exception.constructor.name === 'MongoError') {
      if ([11000, 11001].indexOf(exception.code) >= 0) {
        json.statusCode = HttpStatus.CONFLICT;

        const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
        const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
        json.key = keyBasic && keyBasic[2];
        json.value = valueBasic && valueBasic[2];
        json.message = 'Duplication Error';
      }
    } else {
      json.message = exception.message;
    }
    res.status(json.statusCode).json(json);
  }
}
