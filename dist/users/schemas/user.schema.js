"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: {
        type: String,
    },
    password: { type: String },
    roles: [{ type: String, enum: ['admin', 'user'] }],
});
exports.UserSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=user.schema.js.map