import { HttpStatus, HttpException } from '@nestjs/common';

export class AcceptedException extends HttpException {
  constructor(message?: string | object) {
    super(
      (message && (typeof message === 'string' ? { message } : message)) || {
        message: 'Accepted',
      },
      HttpStatus.ACCEPTED,
    );
  }
}
