import { AcceptedException } from './accept.exception';
import {
  UnauthorizedException,
  ForbiddenException,
  GoneException,
} from '@nestjs/common';

export const errors = {
  // Custom Exceptions
  deletedSuccessfully: new AcceptedException({
    message: 'Document deleted successfully',
  }),

  // Building Exceptions
  documentNotFound: new GoneException('Cannot found document with this ID'),
  invalidEmailOrPassword: new UnauthorizedException(
    'Invalid "Email" or "Password"',
  ),
  invalidPassword: new UnauthorizedException('Invalid old password'),
  invalidPasswordConfirmation: new ForbiddenException(
    '"Password" and "Confirm password" are not equal',
  ),
  invalidNewPassConfirmation: new ForbiddenException(
    '"New password" and "Confirm new password" are not equal',
  ),
  
  validateOnType: {
    images: new ForbiddenException('Uploaded file not an image'),
  },
  uploadedFileBiggerThanMaximumAllowedFileLimit: new ForbiddenException(
    'Uploaded file bigger than maximum allowed file limit',
  ),
};
