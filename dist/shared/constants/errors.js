"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.errors = {
    deletedSuccessfully: new common_1.HttpException({ message: 'Deleted successfully' }, common_1.HttpStatus.ACCEPTED),
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