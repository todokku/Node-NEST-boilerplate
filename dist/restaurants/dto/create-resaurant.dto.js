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
const lat_lng_dto_1 = require("./lat-lng.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateRestaurantDto {
}
__decorate([
    swagger_1.ApiModelProperty({ example: '000000000000000000000000' }),
    class_validator_1.IsMongoId(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "cityId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty({ example: 'user@mail.com' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateRestaurantDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => lat_lng_dto_1.LatLngDto),
    __metadata("design:type", lat_lng_dto_1.LatLngDto)
], CreateRestaurantDto.prototype, "location", void 0);
exports.CreateRestaurantDto = CreateRestaurantDto;
//# sourceMappingURL=create-resaurant.dto.js.map