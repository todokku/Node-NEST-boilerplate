import { AcceptedException } from './accept.exception';
import { UnauthorizedException, ForbiddenException, GoneException } from '@nestjs/common';
export declare const errors: {
    deletedSuccessfully: AcceptedException;
    documentNotFound: GoneException;
    invalidEmailOrPassword: UnauthorizedException;
    invalidPassword: UnauthorizedException;
    invalidPasswordConfirmation: ForbiddenException;
    invalidNewPassConfirmation: ForbiddenException;
    validateOnType: {
        images: ForbiddenException;
    };
    uploadedFileBiggerThanMaximumAllowedFileLimit: ForbiddenException;
};
