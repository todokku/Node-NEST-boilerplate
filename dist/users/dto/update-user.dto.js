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
const base_update_class_1 = require("../../shared/base/dto/base-update-class");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const extend_class_validator_1 = require("..\\..\\shared\\validators\\extend-class-validator");
class UpdateUserDto extends base_update_class_1.BaseUpdateClass {
}
__decorate([
    swagger_1.ApiProperty({ example: 'user' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'user@mail.com' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        isArray: true,
        example: ['user', 'admin'],
    }),
    class_validator_1.IsArray(),
    class_validator_1.ArrayUnique(),
    extend_class_validator_1.ValidArrayValues(['admin', 'user']),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "roles", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map