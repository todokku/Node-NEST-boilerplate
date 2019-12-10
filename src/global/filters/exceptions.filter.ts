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
      statusCode: null,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: undefined,
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
    } else if (['UnauthorizedException'].indexOf(exception.constructor.name)) {
      jsonResponse.message = exception.response;
    } else {
      jsonResponse.message = exception.message;
    }

    /*
    else if (exception instanceof Error) {
      jsonResponse.message = exception.message;
      if (exception.name === 'MongoError') {
        status = HttpStatus.CONFLICT;
        jsonResponse.message = exception.message;
      }
    }
    */
    jsonResponse.statusCode = status;

    if (exception.response) {
      response.status(status).json(exception.response);
    } else {
      response.status(status).json(jsonResponse);
    }

    console.log({
      exceptionConstructorName: exception.constructor.name,
      type: 'Exception-error',
    });
  }
}
