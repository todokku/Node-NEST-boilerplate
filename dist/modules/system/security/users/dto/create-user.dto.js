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
const base_create_class_1 = require("./../../../../../shared/base/dto/base-create-class");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto extends base_create_class_1.BaseCreateClass {
}
__decorate([
    swagger_1.ApiProperty({ example: 'user name' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'user@mail.com' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'password123' }),
    class_validator_1.Matches(/^.{6,}$/, { message: 'Password at least 6' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'password123' }),
    class_validator_1.Matches(/^.{6,}$/, { message: 'Password at least 6' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    swagger_1.ApiProperty({
        isArray: true,
        example: ['user', 'admin'],
    }),
    class_validator_1.IsArray(),
    class_validator_1.ArrayContains(['user', 'admin']),
    class_validator_1.ArrayNotEmpty(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map