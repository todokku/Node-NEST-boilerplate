"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geo_point_schema_1 = require("./../../shared/schemas/geo-point.schema");
const mongoose_1 = require("mongoose");
exports.RestaurantsSchema = new mongoose_1.Schema({
    cityId: { type: mongoose_1.ObjectId, required: true, ref: 'cities' },
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
    },
    image: { type: String, required: true },
    location: geo_point_schema_1.GeoPointSchema,
});
exports.RestaurantsSchema.index({ email: 1 }, { unique: true });
exports.RestaurantsSchema.index({ location: '2dsphere' });
//# sourceMappingURL=restaurants.schema.js.map