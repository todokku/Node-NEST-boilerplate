"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ObjectToMongoPointPipe = class ObjectToMongoPointPipe {
    constructor(propertyName) {
        this.propertyName = propertyName;
    }
    transform(body, metadata) {
        if (this.propertyName) {
            body[this.propertyName] = {
                type: 'Point',
                coordinates: [
                    body[this.propertyName].longitude,
                    body[this.propertyName].latitude,
                ],
            };
        }
        else {
            body = {
                type: 'Point',
                coordinates: [body.longitude, body.latitude],
            };
        }
        return body;
    }
};
ObjectToMongoPointPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [String])
], ObjectToMongoPointPipe);
exports.ObjectToMongoPointPipe = ObjectToMongoPointPipe;
//# sourceMappingURL=object-to-mongo-point.pipe.js.map