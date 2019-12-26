"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elastic_search_options_1 = require("./../../shared/options/elastic-search.options");
const mongoose_1 = require("mongoose");
const mongoosastic = require("mongoosastic");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    roles: [{ type: String, enum: ['admin', 'user'] }],
});
exports.UserSchema.index({ email: 1 }, { unique: true });
exports.UserSchema.plugin(mongoosastic, elastic_search_options_1.elasticSearchOptions);
//# sourceMappingURL=user.schema.js.map