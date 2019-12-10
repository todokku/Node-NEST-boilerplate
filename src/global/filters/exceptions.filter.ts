import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { isObject, log } from 'util';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
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
    } else if (exception instanceof Error) {
      if (exception.name === 'MongoError') {
        status = HttpStatus.CONFLICT;
        jsonResponse.message = exception.message;
      }
    }

    jsonResponse.statusCode = status;

    console.log(exception);
    response.status(status).json(jsonResponse);
  }
}
