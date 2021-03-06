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
const base_dto_class_1 = require("../../../../shared/base/dto/base-dto.class");
const location_dto_1 = require("./location.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RestaurantDto extends base_dto_class_1.BaseDtoClass {
}
__decorate([
    swagger_1.ApiProperty({ example: '000000000000000000000000' }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], RestaurantDto.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], RestaurantDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'restaurant@mail.com' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], RestaurantDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", location_dto_1.LocationDto)
], RestaurantDto.prototype, "location", void 0);
exports.RestaurantDto = RestaurantDto;
//# sourceMappingURL=restaurant.dto.js.map