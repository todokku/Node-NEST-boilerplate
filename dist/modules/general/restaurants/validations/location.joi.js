"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
exports.locationValidator = Joi.object({
    latitude: Joi.number(),
    longitude: Joi.number(),
});
//# sourceMappingURL=location.joi.js.map