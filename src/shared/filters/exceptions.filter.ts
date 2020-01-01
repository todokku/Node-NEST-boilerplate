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
    console.log({
      exceptionConstructorName: exception.constructor.name,
      isHttpError: exception instanceof HttpException,
      exception,
    });

    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    let jsonRes = {
      // timestamp: new Date().toISOString(),
      path: req.url,
      error: undefined,
      statusCode: exception.status,
      message: null,
      key: undefined,
      value: undefined,
    };
    if (exception instanceof HttpException) {
      jsonRes.statusCode = exception.getStatus();

      if (typeof exception.message === 'object') {
        // Destruct object property of message is nested object
        for (const property in exception.message) {
          if (exception.message.hasOwnProperty(property)) {
            jsonRes[property] = exception.message[property];
          }
        }
      } else {
        // Or just pass the message if it's a string
        jsonRes.message = exception.message;
      }

      // Class validator handler
      if (exception instanceof BadRequestException) {
        if (
          exception.message &&
          Array.isArray(exception.message.message) &&
          exception.message.message[0] instanceof ValidationError
        ) {
          jsonRes.key = exception.message.message[0].property;
          jsonRes.value = exception.message.message[0].value;
          jsonRes.message = Object.values(
            exception.message.message[0].constraints,
          )[0];
        }
      }
    } else if (exception instanceof TypeError) {
      jsonRes.error = 'Not Found';
      jsonRes.statusCode = 404;
      // jsonRes.message= exception.message;
    } else if (exception.constructor.name === 'MongoError') {
      // if ([11000, 11001].indexOf(exception.code) >= 0) { // Duplication error
      jsonRes.statusCode = HttpStatus.CONFLICT;

      const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
      const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
      jsonRes.key = keyBasic && keyBasic[2];
      jsonRes.value = valueBasic && valueBasic[2];
      jsonRes.message = 'Duplication Error';
      // }
    } else {
      jsonRes.message = exception.message;
    }

    if (!jsonRes.statusCode && !exception.status) {
      Logger.log('Unhandled type of errors');
    }

    res.status(jsonRes.statusCode || exception.status || 500).json(jsonRes);
  }
}
