"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.errors = {
    deletedSuccessfully: new common_1.HttpException({ message: 'Deleted successfully' }, common_1.HttpStatus.ACCEPTED),
    documentNotFound: new common_1.GoneException('Cannot found document with this ID'),
    invalidEmailOrPassword: new common_1.UnauthorizedException('Invalid email or password'),
    passwordNotEqualConfirmPassword: new common_1.ForbiddenException('Password and confirm password are not equal'),
};
//# sourceMappingURL=errors.js.map