"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.constants = {
    admin: {
        name: 'Admin',
        email: 'admin@indexgroup.net',
        password: 'P@$$W0RD',
    },
    notFound: new common_1.NotFoundException('Cannot found document with this ID'),
};
//# sourceMappingURL=constants.js.map