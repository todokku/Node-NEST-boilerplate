import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any /* unknown */, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let jsonResponse = {
      // timestamp: new Date().toISOString(),
      path: request.url,
      statusCode: null,
      message: null,
      key: undefined,
      value: undefined,
    };

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      jsonResponse = exception.message;
    } else if (exception.constructor.name === 'MongoError') {
      if ([11000, 11001].indexOf(exception.code) >= 0) {
        status = HttpStatus.CONFLICT;

        const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
        const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
        jsonResponse.key = keyBasic && keyBasic[2];
        jsonResponse.value = valueBasic && valueBasic[2];
        jsonResponse.message = 'Duplication Error';
      }
    } else {
      jsonResponse.message = exception.message;
    }

    response.status(status).json(jsonResponse);

    Logger.log({
      exceptionConstructorName: exception.constructor.name,
      type: 'Exception-error',
      isHttpError: exception instanceof HttpException,
      exception,
    });
  }
}
