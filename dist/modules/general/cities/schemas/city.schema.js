"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.CitySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    id: mongoose_1.ObjectId,
});
//# sourceMappingURL=city.schema.js.map