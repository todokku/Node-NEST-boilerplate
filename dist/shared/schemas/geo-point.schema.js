"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.GeoPointSchema = new mongoose_1.Schema({
    _id: false,
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});
//# sourceMappingURL=geo-point.schema.js.map