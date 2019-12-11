import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { isObject, log } from 'util';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any /* unknown */, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    const jsonResponse = {
      // timestamp: new Date().toISOString(),
      // path: request.url,
      statusCode: null,
      message: null,
      key: undefined,
      value: undefined,
    };

    console.log({
      exceptionConstructorName: exception.constructor.name,
      type: 'Exception-error',
      // exception,
    });

    if (exception instanceof HttpException) {
      status = exception.getStatus(); 
    } else if (exception.constructor.name === 'MongoError') {
      if ([11000, 11001].indexOf(exception.code) >= 0) {
        status = HttpStatus.CONFLICT;

        const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
        jsonResponse.key = keyBasic && keyBasic[2];
        let valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
        jsonResponse.value = valueBasic && valueBasic[2];
        jsonResponse.message = 'Duplication Error';
      }
    } else {
      jsonResponse.message = exception.message;
    }

    jsonResponse.statusCode = status;
    if (exception.response) {
      response.status(status).json(exception.response);
    } else {
      response.status(status).json(jsonResponse);
    }
  }
}
