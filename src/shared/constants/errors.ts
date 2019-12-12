import {
  HttpException,
  HttpStatus,
  UnauthorizedException,
  ForbiddenException,
  GoneException,
} from '@nestjs/common';

export const errors = {
  deletedSuccessfully: new HttpException(
    { message: 'Deleted successfully' },
    HttpStatus.ACCEPTED,
  ),

  documentNotFound: new GoneException('Cannot found document with this ID'),
  invalidEmailOrPassword: new UnauthorizedException(
    'Invalid email or password',
  ),
  passwordNotEqualConfirmPassword: new ForbiddenException(
    'Password and confirm password are not equal',
  ),
};
