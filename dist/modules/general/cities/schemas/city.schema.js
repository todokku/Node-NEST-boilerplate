"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoosastic = require("mongoosastic");
exports.CitySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    id: mongoose_1.ObjectId,
});
exports.CitySchema.plugin(mongoosastic);
//# sourceMappingURL=city.schema.js.map