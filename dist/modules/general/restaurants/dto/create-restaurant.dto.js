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
const location_dto_1 = require("./location.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateRestaurantDto {
}
__decorate([
    swagger_1.ApiProperty({ example: '000000000000000000000000' }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: 'string', format: 'binary' }),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'restaurant name' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'restaurant@mail.com' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", location_dto_1.LocationDto)
], CreateRestaurantDto.prototype, "location", void 0);
exports.CreateRestaurantDto = CreateRestaurantDto;
//# sourceMappingURL=create-restaurant.dto.js.map