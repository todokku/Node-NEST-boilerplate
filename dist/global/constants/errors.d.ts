import { HttpException, UnauthorizedException, ForbiddenException, GoneException } from '@nestjs/common';
export declare const errors: {
    deletedSuccessfully: HttpException;
    documentNotFound: GoneException;
    invalidEmailOrPassword: UnauthorizedException;
    passwordNotEqualConfirmPassword: ForbiddenException;
};
