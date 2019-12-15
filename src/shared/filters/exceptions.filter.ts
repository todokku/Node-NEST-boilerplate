import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any /* unknown */, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let jsonResponse = {
      // timestamp: new Date().toISOString(),
      path: request.url,
      statusCode: exception.status,
      message: null,
      key: undefined,
      value: undefined,
    };

    if (exception instanceof HttpException) {
      jsonResponse.statusCode = exception.getStatus();
      jsonResponse = exception.message;

      // Class validator handler
      if (exception instanceof BadRequestException) {
        if (
          exception.message &&
          Array.isArray(exception.message.message) &&
          exception.message.message[0] instanceof ValidationError
        ) {
          jsonResponse.key = exception.message.message[0].property;
          jsonResponse.value = exception.message.message[0].value;
          jsonResponse.message = Object.values(
            exception.message.message[0].constraints,
          )[0];
        }
      }
    } else if (exception.constructor.name === 'MongoError') {
      if ([11000, 11001].indexOf(exception.code) >= 0) {
        jsonResponse.statusCode = HttpStatus.CONFLICT;

        const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
        const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
        jsonResponse.key = keyBasic && keyBasic[2];
        jsonResponse.value = valueBasic && valueBasic[2];
        jsonResponse.message = 'Duplication Error';
      }
    } else {
      jsonResponse.message = exception.message;
    }

    response.status(jsonResponse.statusCode).json(jsonResponse);

    Logger.log({
      exceptionConstructorName: exception.constructor.name,
      type: 'Exception-error',
      isHttpError: exception instanceof HttpException,
      exception,
    });
  }
}
