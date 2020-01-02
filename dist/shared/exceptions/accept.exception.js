"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class AcceptedException extends common_1.HttpException {
    constructor(message) {
        super((message && (typeof message === 'string' ? { message } : message)) || {
            message: 'Accepted',
        }, common_1.HttpStatus.ACCEPTED);
    }
}
exports.AcceptedException = AcceptedException;
//# sourceMappingURL=accept.exception.js.map