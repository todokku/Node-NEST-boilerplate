"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accept_exception_1 = require("./accept.exception");
const common_1 = require("@nestjs/common");
exports.errors = {
    deletedSuccessfully: new accept_exception_1.AcceptedException({
        message: 'Document deleted successfully',
    }),
    documentNotFound: new common_1.GoneException('Cannot found document with this ID'),
    invalidEmailOrPassword: new common_1.UnauthorizedException('Invalid "Email" or "Password"'),
    invalidPassword: new common_1.UnauthorizedException('Invalid old password'),
    invalidPasswordConfirmation: new common_1.ForbiddenException('"Password" and "Confirm password" are not equal'),
    invalidNewPassConfirmation: new common_1.ForbiddenException('"New password" and "Confirm new password" are not equal'),
    validateOnType: {
        images: new common_1.ForbiddenException('Uploaded file not an image'),
    },
    uploadedFileBiggerThanMaximumAllowedFileLimit: new common_1.ForbiddenException('Uploaded file bigger than maximum allowed file limit'),
};
//# sourceMappingURL=errors.js.map